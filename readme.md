## WASM Compile commands

```shell
#Here _fib is the exported function.
emcc main.cpp -o main.js -s WASM=1 -s EXPORTED_FUNCTIONS='["_fib"]' -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]'
```

```shell
#This exports all the functions
emcc main.cpp -o main.js -s WASM=1 -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]'
```

