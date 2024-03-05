#include <stdio.h>
#include <emscripten.h>

extern "C" {
    int EMSCRIPTEN_KEEPALIVE fib(int n){
        if(n==0 || n==1){
            return 1;
        } else {
            return fib(n-1) + fib(n-2);
        }
    }
}