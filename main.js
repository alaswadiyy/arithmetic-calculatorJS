const operators = prompt('Kindly enter an operator(+,-,*,/,%)');
const num1 = +prompt('Kindly enter a number');
const num2 = +prompt('Kindly enter a second number');

let result;

if (operators == '+') {
  result = num1 + num2;
} else if (operators == '-') {
  result = num1 - num2;
} else if (operators == '*') {
  result = num1 * num2;
} else if (operators == '/') {
  result = num1 / num2;
} else if (operators == '%') {
  result = num1 % num2;
} else {
  alert('Invalid Operator \n Kindly enter a valid operator(+,-,*,/,%)');
}

alert(`${num1} ${operators} ${num2} = ${result}`);