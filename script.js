
// Calculator Screen
const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

// Numbers
const numbers = document.querySelectorAll(".number");

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if(currentNumber === '0') {
        currentNumber = number
    } else{
        currentNumber += number;
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

// Operators
const operators = document.querySelectorAll(".operator");
let caption = document.querySelector('.caption');

const inputOperator = (operator) => {
    if(calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '';
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
        caption.innerHTML = `${event.target.value}`;
    });
});

const calculate = () => {
    let result = '';
    switch(calculationOperator) {
        case "+":
            result = (parseFloat(prevNumber)*10 + parseFloat(currentNumber)*10) / 10;
            break;
        case "-":
            result = (parseFloat(prevNumber)*10 - parseFloat(currentNumber)*10) / 10;
            break;
        case "*":
            result = (parseFloat(prevNumber)*10 * parseFloat(currentNumber)*10) / 10;
            break;
        case "/":
            result = (parseFloat(prevNumber)*100 / parseFloat(currentNumber)) / 100;
            break;
        default:
            return;
    }
    currentNumber = result;
    calculationOperator = '';
    caption.innerHTML = '';
}

// Equal
const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
});

// All Clear
const clearBtn = document.querySelector('.all-clear');

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
});

// Decimal
const decimal = document.querySelector('.decimal');

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

// Percentage
const percentage = document.querySelector('.percentage');

percentage.addEventListener('click', () => {
    currentNumber /= 100;
    updateScreen(currentNumber);
});
