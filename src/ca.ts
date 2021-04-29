import fs, { tmpfile } from "./fs.ts";
import go from "./go.ts";

enum PRINT_MODE {
	TEXT,
	JSON,
	QR
}

const nebulaCertRaw = async (...args : string[]) => {
	const {
		stderr,
		stdout,
	} = await go("nebula-cert.wasm", "nebula-cert", ...args);

	if(stderr) {
		throw new Error(stderr);
	}

	return stdout;
};

const nebulaCert = async (cmd : string, args : Record<string, string>) => {
	const argv = Object.keys(args).map((key) => [ `-${key}`, args[key] ]).reduce((p, c) => p.concat(c));

	return await nebulaCertRaw(cmd, ...argv);
};

export default class CA {
	_path : string|null = null;

	constructor(path : string) {
		this._path = path;
	}

	static async exec(cmd : string, args : Record<string, string>) {
		return await nebulaCert(cmd, args);
	}

	static async create(name : string) {
		if(!name.length) {
			throw new Error("Invalid name");
		}

		const path     = `/ca/${name}`;
		const nodePath = `/ca/${name}/nodes`;
		const ca       = new CA(path);

		if(await fs.promises.stat(path).catch(() => true) === true) {
			await fs.promises.mkdir(nodePath, { recursive : true });

			await this.exec("ca", {
				name,
				'out-crt' : ca.crtPath,
				'out-key' : ca.keyPath,
			});
		}

		return ca;
	}

	static async keygen(name : string) {
		const path = `/keys/${name}`;

		await fs.promises.mkdir(path, { recursive : true });

		const args = {
			'out-key' : `${path}.key`,
			'out-pub' : `${path}.pub`,
		};

		return await this.exec('keygen', args);
	}

	static async print(path : string, mode = PRINT_MODE.TEXT) {
		const args : Record<string, string> = { path };

		if(mode === PRINT_MODE.JSON) {
			args['json'] = '';
		}
		else if(mode === PRINT_MODE.QR) {
			args['out-qr'] = tmpfile();
		}

		let result = await this.exec("print", args);

		if(mode === PRINT_MODE.QR) {
			const bytes  = await fs.promises.readFile(args['out-qr']);
			const base64 = bytes.toString('base64');

			result = `data:image/png;base64,${base64}`;

			await fs.promises.unlink(args['out-qr']);
		}

		return result;
	}

	async sign(name : string, ip : string, inPubKey : string|null = null) {
		const args : Record<string, string> = { name, ip };

		if(inPubKey !== null) {
			args['in-pub'] = tmpfile();

			await fs.promises.writeFile(args['in-pub'], inPubKey);
		}

		await this.exec("sign", args);

		if(inPubKey) {
			await fs.promises.unlink(args['in-pub']);
		}
	}

	async exec(cmd : string, args : Record<string, string>) {
		return await CA.exec(cmd, Object.assign(args, {
			'ca-crt' : this.crtPath,
			'ca-key' : this.keyPath,
		}));
	}

	get path() {
		return this._path;
	}

	get crtPath() {
		return `${this.path}/ca.crt`;
	}

	get keyPath() {
		return `${this.path}/ca.key`;
	}
}

export { PRINT_MODE };
