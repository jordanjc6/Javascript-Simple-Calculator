var display = document.getElementById("display");

var keys = document.getElementsByClassName("key");

for(var i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", typeKey);
}

function typeKey() {
    display.innerHTML = display.innerHTML == 0 ? this.value : display.innerHTML + this.value;
}

document.getElementById("delete").addEventListener("click", backSpace);
function backSpace() {       
    display.innerHTML = display.innerHTML.length === 1 ? 0 : display.innerHTML.slice(0, -1);   
}

document.getElementById("clear").addEventListener("click", clear);
function clear() {
    display.innerHTML = 0;
}

document.getElementById("sign").addEventListener("click", flipSign);
function flipSign() {
    display.innerHTML = display.innerHTML * -1;
}

var operations = document.getElementsByClassName("operation");

for(var i = 0; i < operations.length; i++) {
    operations[i].addEventListener("click", storeOperation);
}

var num;
var oper;

function storeOperation() {
    num = display.innerHTML.slice(0, display.innerHTML.length - 1);
    oper = display.innerHTML[display.innerHTML.length - 1];
    clear();
}

document.getElementById("equals").addEventListener("click", calculate);
function calculate() {
    switch(oper) {
        case "/": 
            display.innerHTML = num / display.innerHTML;
            break;
        case "x":
            display.innerHTML = num * display.innerHTML;
            break;
        case "+":
            display.innerHTML = Number(num) + Number(display.innerHTML);
            break;
        case "-":
            display.innerHTML = num - display.innerHTML;
            break;
    }
}