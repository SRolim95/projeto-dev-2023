let wallet = prompt("Informe a quantidade de dinheiro inicial:")
wallet = parseFloat(wallet)   //transformar a string em número para realizar o cálculo númerico
let atmOption = "" //string vazia para aguardar a interação do usuário

do {  //FAÇA o menu ser inserido na tela com 3 opções
    atmOption = prompt(
        "Saldo disponível: R$ " + wallet +
        "\n1- Depositar dinheiro" +
        "\n2- Sacar dinheiro" +
        "\n3- Sair"
    )

    switch (atmOption) { //switch usado para auxiliar na criação das opções do menu
        case "1":
            wallet += parseFloat(prompt("informe o valor a ser adicionado:"))
            break
        case "2":
            wallet -= prompt("Informe o valor a ser removido:")
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Opção inválida.")
    }
} while (atmOption !== "3") //ENQUANTO a entrada do usuário for diferente de 3, o menu será inserido na tela.