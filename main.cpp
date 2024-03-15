#include <stdio.h>
#include <vector>
#include <iostream>
#include <string>
#include "h_test.h"
#include <emscripten.h>

using namespace std;
int calculate_rent(int vls){
    return vls * 234;
}

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    vector<string> cached_var;
    EMSCRIPTEN_KEEPALIVE
    int offset_val = 0;

    void EMSCRIPTEN_KEEPALIVE refer_cache(int ccr_limit){
        if(cached_var.size()){
            for(int i=offset_val;i<offset_val+ccr_limit;i++){
                const char* myString = cached_var[i].c_str();
                EM_ASM_({
                    var str = window.UTF8ToString($0);
                    log_render(str);
                },myString);
                if(i==(offset_val+ccr_limit-1)){
                    EM_ASM(
//                        interscTest();
                    );
                }
            }
            offset_val += ccr_limit;
        }
    }

    void EMSCRIPTEN_KEEPALIVE test_buffer(uint8_t *buffer, size_t length){
        vector<string> vls_data_bank;
        string s_space = "";
        for(size_t i=0;i<length;i++){
            s_space += buffer[i];
            if(buffer[i]=='\n'){
                vls_data_bank.push_back(s_space);
                s_space = "";
            }
        }
        cached_var = vls_data_bank;
        refer_cache(20);
//        string text(reinterpret_cast<char* >(buffer),length);
    }

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