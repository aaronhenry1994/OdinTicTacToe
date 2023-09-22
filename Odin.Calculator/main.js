const calculator = document.querySelector('.calculator');
const buttons = document.querySelectorAll('.buttons');
const display = document.querySelector('#screen');
let previousDisplayNumber = document.querySelector('.prevDisplayNumber');
previousDisplayNumber.textContent = '';
let currentDisplayNumber = document.querySelector('.currentDisplayNumber');
currentDisplayNumber.textContent = '0'
let displayOperator = document.querySelector('.currentOperator');

displayOperator.textContent = '';
let currentOperator = '';
let previousNum = '';
let currentNum = '';

const clearButton = document.querySelector('.clearButton');

function clearScreen() {
    window.location.reload();
};

clearButton.addEventListener('click', () => {
    clearScreen();
    display.textContent = 'Clear'
});

function handleNumber(number) {
    if (currentNum.length <= 8) {
        currentNum += number;
        currentDisplayNumber.textContent = currentNum;
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        handleNumber(e.target.textContent);
    });
});

function operate(previousNum, operator, currentNum) {
    previousDisplayNumber.textContent = previousNum;
    currentDisplayNumber.textContent = currentNum;
    
    previousNum = Number(previousNum);
    currentOperator = displayOperator.textContent;
    currentNum = Number(currentNum);

    result = '';

    operator = currentOperator;
    if (operator === '+') {
        previousDisplayNumber.textContent = '';
        displayOperator.textContent = '';
        currentNum = previousNum + currentNum;
    }
    else if (operator === '-') {
        previousDisplayNumber.textContent = '';
        displayOperator.textContent = '';
        currentNum = previousNum - currentNum;
    }
    else if (operator === '*') {
        previousDisplayNumber.textContent = '';
        displayOperator.textContent = '';
        currentNum = previousNum * currentNum;
    }
    else if (operator === '/') {
        if (currentNum = 0) {
            previousNum.textContent = 'Error';
        }
        previousDisplayNumber.textContent = '';
        displayOperator.textContent = '';
        currentNum = previousNum / currentNum;
    }
    currentDisplayNumber.textContent = currentNum;
    return currentNum;
};

result = operate(previousNum, currentOperator, currentNum);

const operators = document.querySelectorAll('.operators');

function handleOperator(operator) {
    if (previousNum === '') {
        previousDisplayNumber.textContent = currentNum;
        previousNum = currentNum;
        console.log(previousNum);
        checkCalculation(operator);
    }
    if (currentNum = '') {
        checkCalculation(operator);
    }
    else {
        operate();
        currentOperator = operator;
        console.log(currentNum);
        console.log(operator);
        currentDisplayNumber.textContent = '0';
        displayOperator.textContent = currentOperator;
        previousDisplayNumber.textContent = previousNum;
    }
}

function checkCalculation(text) {
    currentOperator = text;
    previousDisplayNumber.textContent = currentNum;
    previousNum = currentNum;
    displayOperator.textContent = currentOperator;
    currentDisplayNumber.textContent = '0';
    currentNum = '';
}

let newCurrentNum;

operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        handleOperator(e.target.textContent)
    });
});


const equalsBtn = document.querySelector('.equalsBtn');

equalsBtn.addEventListener('click', () => {
    console.log('You pressed the equals button!');

    operate(previousNum, currentOperator, currentNum);

    previousNum = previousDisplayNumber.textContent;
    currentOperator = displayOperator.textContent;
    currentNum = currentDisplayNumber.textContent;

    console.log(previousNum, currentOperator, currentNum);

    newCurrentNum = operate(previousNum, currentOperator, currentNum);
    console.log(newCurrentNum);
    currentNum = newCurrentNum;

    previousDisplayNumber.textContent = '';
    currentDisplayNumber.textContent = newCurrentNum;
    console.log(currentNum);
});