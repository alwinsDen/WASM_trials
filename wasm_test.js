var js_wrapped_fib = Module.cwrap("fib", "number", ["number"]);
var test_js = Module.cwrap("call_js", null);
var process_module = Module.cwrap("process_buffer", null, ["number", "number"])
var test_buffer = Module.cwrap("test_buffer", null, ["string", "number"]);

function pressBtn() {
    console.log("The result of fib(5) is:", js_wrapped_fib(10));
    test_js();
}

function set_background_color() {
    console.log("Test call");
}

//define a function with parameters
function set_function_paramters(testData) {
    console.log("This is from server: ", testData);
}

//file input handler
let fileInput = document.querySelector(".inputter");
const processor = () => {
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = (e) => {
            let buffer = e.target.result;
            const convData = new Uint8Array(buffer);
            test_buffer(buffer, buffer.byteLength);
        }
        reader.readAsArrayBuffer(file)
    }
}
fileInput.addEventListener("change", processor);

//unprocessed code
// let uint8_t_arr = new Uint8Array(e.target.result);
// const uint8_t_ptr = window.Module._malloc(uint8_t_arr.length);
// window.Module.HEAPU8.set(uint8_t_arr, uint8_t_ptr);
// process_module(uint8_t_ptr, uint8_t_arr.length);