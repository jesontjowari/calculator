const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number;
};

const numbers = document.querySelectorAll(".number");

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (number) => {
    if (currentNumber === "0") {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

const operators = document.querySelectorAll(".operator");

const inputOperator = (operator) => {
    if (calculationOperator === "") {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = "0";
};

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
    calculate();
    currentNumber = currentNumber.toString();
    updateScreen(currentNumber);
});

const calculate = () => {
    let result = "";
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            return;
    }
    if (result !== "") {
        currentNumber = result;
    }
    calculationOperator = "";
};

const clearBtn = document.querySelector(".all-clear");

const clearAll = () => {
    prevNumber = "";
    calculationOperator = "";
    currentNumber = "0";
};

clearBtn.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
});

const decimal = document.querySelector(".decimal");

inputDecimal = (dot) => {
    if(currentNumber.includes(".")) {
        return;
    }
    currentNumber += dot;
};

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

const percentage = document.querySelector(".percentage");

percentage.addEventListener("click", () => {
    calculatePercent();
    currentNumber = currentNumber.toString();
    updateScreen(currentNumber);
});

const calculatePercent = () => {
    let result = "";
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber / 100 * prevNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber / 100 * prevNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber / 100);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber / 100);
            break;
        default:
            return;
    }
    if (result !== "") {
        currentNumber = result;
    }
    calculationOperator = "";
};

const backspace = document.querySelector(".backspace");

backspace.addEventListener("click", () => {
    if (currentNumber.length <= 1) {
        currentNumber = "0";
    } else {
        currentNumber = currentNumber.substring(0, currentNumber.length -1);
    }
    updateScreen(currentNumber);
});