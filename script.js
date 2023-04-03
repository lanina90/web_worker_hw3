document.addEventListener('DOMContentLoaded', function () {
    let number1 = document.getElementById("number1");
    let number2 = document.getElementById("number2");
    let output = document.getElementById("output");
    let plus = document.getElementById("plus");
    let minus = document.getElementById("minus");
    let mult = document.getElementById("mult");
    let divide = document.getElementById("divide");

    let plusWorker = new Worker("plusWorker.js");
    let minusWorker = new Worker("minWorker.js");
    let multWorker = new Worker("multWorker.js");
    let divideWorker = new Worker("divideWorker.js");

    plus.addEventListener("click", function (e) {
        e.preventDefault()
        plusWorker.postMessage([Number(number1.value), Number(number2.value)]);
    });
    plusWorker.onmessage = function (e) {
        output.textContent = e.data;
        console.log("Output updated: " + output.textContent);
    };

    minus.addEventListener("click", function (e) {
        e.preventDefault()
        minusWorker.postMessage([Number(number1.value), Number(number2.value)]);
    });

    minusWorker.onmessage = function (e) {
        output.textContent = e.data;
    };


    mult.addEventListener("click", function (e) {
        e.preventDefault()
        multWorker.postMessage([Number(number1.value), Number(number2.value)]);
    });

    multWorker.onmessage = function (e) {
        output.textContent = e.data;
    };

    divide.addEventListener("click", function (e) {
        e.preventDefault()
        divideWorker.postMessage([Number(number1.value), Number(number2.value)]);
    });

    divideWorker.onmessage = function (e) {
        output.textContent = e.data;
    };
})