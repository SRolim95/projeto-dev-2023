const interativeMenu = prompt(
"Olá, qual é a opção desejada?" +
"\n1 - Primeira opção" +
"\n2 - Seguinda opção" +
"\n3 - Terceira opção" +
"\n4 - Quarta opção" +
"\n5 - Sair"
)

switch (interativeMenu) {
    case "1":
        alert("A opção selecionada foi a 1 - Primeira opção")
        prompt(
            "Olá, qual é a opção desejada?" +
            "\n1 - Primeira opção" +
            "\n2 - Seguinda opção" +
            "\n3 - Terceira opção" +
            "\n4 - Quarta opção" +
            "\n5 - Sair"
)
    case "2":
        alert("A opção selecionada foi a 2 - Segunda opção")
        prompt(
            "Olá, qual é a opção desejada?" +
            "\n1 - Primeira opção" +
            "\n2 - Seguinda opção" +
            "\n3 - Terceira opção" +
            "\n4 - Quarta opção" +
            "\n5 - Sair"
)
    case "3":
        alert("A opção selecionada foi a 3 - Terceira opção")
        prompt(
            "Olá, qual é a opção desejada?" +
            "\n1 - Primeira opção" +
            "\n2 - Seguinda opção" +
            "\n3 - Terceira opção" +
            "\n4 - Quarta opção" +
            "\n5 - Sair"
)
    case "4":
        alert("A opção selecionada foi a 4 - Quarta opção")
        prompt(
            "Olá, qual é a opção desejada?" +
            "\n1 - Primeira opção" +
            "\n2 - Seguinda opção" +
            "\n3 - Terceira opção" +
            "\n4 - Quarta opção" +
            "\n5 - Sair"
)
    case "5":
        alert("Você escolheu 'Sair', o programa será encerrado.")
        break
    default:
        alert("Opção inválida")
}

/* while (interativeMenu !== "5"){
    let selectedOption = alert ("A opção selecionada foi a número")
    interativeMenu = prompt("Qual é a opção desejada?" +
    "\n1 - Primeira opção" +
    "\n2 - Seguinda opção" +
    "\n3 - Terceira opção" +
    "\n4 - Quarta opção" +
    "\n5 - Sair") */
