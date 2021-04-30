#!/bin/sh

VENDOR_PATH="${PWD}/vendor"
BUILD_PATH="${PWD}/dist"
NEBULA_PATH="${VENDOR_PATH}/nebula"
BUILD_TARGET="build/js-wasm/nebula-cert.wasm"
WASM_PATH="${NEBULA_PATH}/${BUILD_TARGET}"
WASM_EXEC_PATH="$(go env GOROOT)/misc/wasm/wasm_exec.js"

make -C $NEBULA_PATH $BUILD_TARGET
cp $WASM_PATH $BUILD_PATH
cp $WASM_EXEC_PATH $BUILD_PATH

deno bundle --import-map=import_map.json src/app.ts > dist/app.js
npx http-server public/nebula
