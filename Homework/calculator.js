let button = document.getElementById("calculate");

button.addEventListener('click', function () {


    let firstNum = parseInt(document.getElementById("number1").value);
    let secondNum = parseInt(document.getElementById("number2").value);
    let operation = document.getElementById("operation").value;
    let resultField = document.getElementById("result");

    let result = 0;

    if (isNaN(firstNum) || isNaN(secondNum)) {
        result = "Please enter first an second number";
    }
    if (secondNum == 0 && operation == "/") {
        result = "Dividing by zero is not alloved!";
    }

    if (operation == "+") {
        result = firstNum + secondNum;
    } else if (operation == "-") {
        result = firstNum - secondNum;
    } else if (operation == "*") {
        result = firstNum * secondNum;
    } else if (operation == "/") {
        result = firstNum / secondNum;
    }

    resultField.innerHTML = result;

})

