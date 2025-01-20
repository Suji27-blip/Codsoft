let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let firstOperand = '';
let secondOperand = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;

        if (value === 'C') {
            firstOperand = '';
            secondOperand = '';
            operator = '';
            display.value = '';
        } else if (value === '&lt;') {
            display.value = display.value.slice(0, -1);
        } else if (value === '=') {
            if (operator === '+') {
                display.value = parseFloat(firstOperand) + parseFloat(secondOperand);
            } else if (operator === '-') {
                display.value = parseFloat(firstOperand) - parseFloat(secondOperand);
            } else if (operator === '*') {
                display.value = parseFloat(firstOperand) * parseFloat(secondOperand);
            } else if (operator === '/') {
                display.value = parseFloat(firstOperand) / parseFloat(secondOperand);
            }
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            firstOperand = display.value;
            operator = value;
            display.value = '';
        } else {
            display.value += value;
        }
    });
});
