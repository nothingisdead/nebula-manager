import { WasmFs } from "@wasmer/wasmfs";

const tmpfile        = () => `/tmp_${Math.random().toString(36).substr(2, 8)}`;
const wasmfs         = new WasmFs();
const { fs, volume } = wasmfs;

// Go's WASM runtime requires a 'process' global object with a 'cwd' method
const cwd = () => "/";

// Expose the global 'fs' and 'process' objects
Object.assign(globalThis, { fs, process : { cwd } });

export default fs;
export { wasmfs, volume, tmpfile };
