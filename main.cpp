#include <stdio.h>
#include "h_test.h"
#include <emscripten.h>

int calculate_rent(int vls){
    return vls * 234;
}

extern "C" {
    //ptr test
    void EMSCRIPTEN_KEEPALIVE add_one(int *input_ptr, int *output_ptr){
        *output_ptr = (*input_ptr) + 1;
    }

    //calc a function from cpp
    int EMSCRIPTEN_KEEPALIVE fib(int n){
        if(n==0 || n==1){
            return 1;
        } else {
            return fib(n-1) + fib(n-2);
        }
    }

    //call a function from the javascript functions
    void EMSCRIPTEN_KEEPALIVE call_js(){
        emscripten_run_script("set_background_color()");

        //This is the c++ funcitons from h_test.cpp file.
        test_string("234243234");

        //also another way to pass parameters to JS
        //to call JS functions without paramters
        EM_ASM(
            set_background_color();
        );

        //to call JS functions with parameters
        EM_ASM_({
            set_function_paramters($0);
        },calculate_rent(2348));
    }
}