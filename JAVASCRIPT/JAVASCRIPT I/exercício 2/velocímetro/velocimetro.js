const car1 = prompt("Informe o nome do primeiro carro");
const velCar1 = prompt("Informe a velocidade do primeiro carro");

const car2 = prompt("Informe o nome do segundo carro");
const velCar2 = prompt("Informe a velocidade do segundo carro");

if (velCar1 > velCar2) {
  alert(car1 + " é mais veloz");
} else if (velCar1 < velCar2) {
  alert(car2 + " é mais veloz");
} else {
  alert("Os dois carros possuem a mesma velocidade");
}