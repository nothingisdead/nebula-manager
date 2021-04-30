import CA, { PRINT_MODE } from "./ca.ts";
import fs, { wasmfs } from "./fs.ts";

(async () => {
	const ca = await CA.create("home");

	await CA.keygen("foo_laptop");
	await ca.sign("foo_laptop", "10.10.10.10/32", `${await fs.promises.readFile('/keys/foo_laptop.pub')}`);

	console.log(await CA.print(ca.crtPath));
	console.log(await CA.print("/foo_laptop.crt", PRINT_MODE.JSON));
	console.log(await CA.print(ca.crtPath, PRINT_MODE.QR));

	console.log(wasmfs.toJSON());
})();
