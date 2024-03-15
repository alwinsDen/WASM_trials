## WASM Cookbook

### References

https://marcoselvatici.github.io/WASM_tutorial/

 - Memory access keys: https://emscripten.org/docs/api_reference/preamble.js.html#type-accessors-for-the-memory-model

### WASM build Commands

```shell
 emcc  main.cpp h_test.cpp -o main.js -s WASM=1 -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]'
```

### Temporary build command with O2 level optimization
```shell
emcc  main.cpp h_test.cpp -O2 -o main.js -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 -s FORCE_FILESYSTEM=1 -s TOTAL_MEMORY=268435456 -s EXPORTED_FUNCTIONS='["_malloc"]' -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]'
```

### Commands
```shell
#Here _fib is the exported function.
emcc main.cpp -o main.js -s WASM=1 -s EXPORTED_FUNCTIONS='["_fib"]' -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]'
```

```shell
#This exports all the functions
emcc main.cpp -o main.js -s WASM=1 -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]'
```

