const number1 = prompt("Informe o primeiro número");
const number2 = prompt("Informe o segundo número");

const x = parseFloat(number1);
const y = parseFloat(number2);

const addition = x + y;
const subtraction = x - y;
const multiplication = x * y;
const division = x / y;

alert(
  "Resultados:\n" +
    "\nSoma: " +
    addition +
    "\nSubtração: " +
    subtraction +
    "\nMultiplicação: " +
    multiplication +
    "\nDivisão: " +
    division
);
