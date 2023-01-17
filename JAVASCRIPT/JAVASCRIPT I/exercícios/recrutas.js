const firstName = prompt("Informe o primeiro nome do recruta:"); //definir variável com const (tentar nomear sempre em inglês)
const lastName = prompt("Informe o sobrenome do recruta:");
const studyCamp = prompt("Informe o campo de estudo do recruta:");
const birthDay = prompt("Informe o ano de nascimento do nome do recruta:");

alert(
  "Recruta cadastrado com sucesso!\n" + //para pular uma linha no alert, usar o \n //
    "\nNome Completo: " +
    firstName +
    " " +
    lastName +
    "\nCampo de estudo: " +
    studyCamp +
    "\nIdade: " +
    (2022 - birthDay)
);
