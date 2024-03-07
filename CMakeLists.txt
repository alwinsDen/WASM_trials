cmake_minimum_required(VERSION 3.27)
project(WASM_TEST)

set(CMAKE_CXX_STANDARD 23)

add_executable(WASM_TEST main.cpp
        h_test.cpp)
