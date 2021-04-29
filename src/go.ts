import { Go as GoType } from "../vendor/wasm_exec.d.ts";
import fs from "./fs.ts";

const compiled = new Map();

// Cache compiled WASM bytecode
const compile = async (wasmPath : string) => {
	if(!compiled.has(wasmPath)) {
		const res   = await fetch(wasmPath);
		const bytes = await res.arrayBuffer();
		const wasm  = await WebAssembly.compile(bytes);

		compiled.set(wasmPath, wasm);
	}

	return compiled.get(wasmPath);
};

// Tail a file, keeping track of the last cursor position
const offsets : Record<string, number> = {};

const readToEnd = (path : string) => {
	if(!offsets[path]) {
		offsets[path] = 0;
	}

	const fd       = fs.openSync(path, "r");
	const { size } = fs.fstatSync(fd);
	const buffer   = new Uint8Array(size - offsets[path]);

	fs.readSync(fd, buffer, 0, buffer.length, offsets[path]);
	fs.closeSync(fd);

	offsets[path] = size;

	return buffer;
};

// Run a WASM program and return the stdout and stderr
export default async function run(wasmPath : string, ...argv : string[]) {
	const go : GoType = new Go();
	const wasm        = await compile(wasmPath);
	const instance    = await WebAssembly.instantiate(await wasm, go.importObject);

	if(argv.length) {
		go.argv = argv;
	}

	await go.run(instance);

	const stdout = new TextDecoder().decode(readToEnd("/dev/stdout"));
	const stderr = new TextDecoder().decode(readToEnd("/dev/stderr"));

	return { stderr, stdout };
}
