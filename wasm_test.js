var js_wrapped_fib = Module.cwrap("fib", "number", ["number"]);
var test_js = Module.cwrap("call_js", null);
var process_module = Module.cwrap("process_buffer", null, ["number", "number"])
var test_buffer = Module.cwrap("test_buffer", null, ["number", "number"]);
var refer_cache = Module.cwrap("refer_cache", null, ["number"]);

//file input handler
let fileInput = document.querySelector(".inputter");
const processor = () => {
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onloadend = (e) => {
        const convData = new Uint8Array(e.target.result, 0, e.target.result.byteLength);
        const sizeOfData = Module._malloc(convData.length);
        Module.HEAPU8.set(convData, sizeOfData);
        test_buffer(sizeOfData, convData.byteLength);
    }
    reader.readAsArrayBuffer(file)
}
fileInput.addEventListener("change", processor);

let getLogger = document.querySelector(".logger");

function log_render(logString) {
    const node = document.createElement("p");
    node.className = "loggerPrint";
    const textNode = document.createTextNode(logString);
    node.appendChild(textNode);
    getLogger.appendChild(node);
}

//intersection test for infinite scrolling
function interscTest() {
    const node = document.createElement("p");
    node.className = "EOL loggerPrint";
    const textNode = document.createTextNode("====================================================EOL===================================================");
    node.appendChild(textNode);
    getLogger.appendChild(node);
    // activate_intersection();
}

function activate_intersection() {
    //intersection code setup
    let options = {
        root: document.querySelector(".logger"),
        rootMargin: "0px",
        threshold: 1.0
    }

    let observer = new IntersectionObserver(() => {
        console.log("HEY THERE");
        // refer_cache(20);
    }, options);

    //target element
    let targetElement = document.querySelector(".EOL");
    observer.observe(targetElement);
}

// activate_intersection();

function testcache() {
    refer_cache(20);
}

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