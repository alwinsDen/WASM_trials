## WASM Cookbook

### References

https://marcoselvatici.github.io/WASM_tutorial/

 - Memory access keys: https://emscripten.org/docs/api_reference/preamble.js.html#type-accessors-for-the-memory-model

### Commands
```shell
#Here _fib is the exported function.
emcc main.cpp -o main.js -s WASM=1 -s EXPORTED_FUNCTIONS='["_fib"]' -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]'
```

```shell
#This exports all the functions
emcc main.cpp -o main.js -s WASM=1 -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]'
```

