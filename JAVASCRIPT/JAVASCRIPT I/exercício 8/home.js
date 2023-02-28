let houses = []  //criar um array pra armazenar os imóveis
let option = "" //opção é uma string vazia

do {
    option = prompt(
        "Bem vindo ao cadastro de imóveis!\n " +
        "Total de imóveis cadastrados: " + houses.length +
        "\n\nEscolha uma opção: \n1. Novo imóvel\n2. Listar Imóveis\n3. Sair"
    )

    switch (option){
        case "1":
            const home = {}    //criei um objeto para armazenar os dados dos imóveis

            home.owner = prompt("Informe o nome do proprietário do imóvel:")
            home.bedrooms = parseFloat(prompt("Quantos quartos possui o imóvel?"))
            home.bathrooms = parseFloat(prompt("Quantos banheiros possui o imóvel?"))
            home.garage = prompt("O imóvel possui garagem? (Sim/Não)")

            const confirmed = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + home.owner +
                "\nQuartos: " + home.bedrooms +
                "\nBanheiros: " + home.bathrooms +
                "\nPossui garagem? " + home.garage
            )
            if (confirmed) {
                houses.push(home)
                alert("Imóvel salvo com sucesso!")
            } else {
                alert("Você escolheu não salvar. Voltando ao menu...")
            }
        break
        case "2": //case2 é usado pra listar os dados cadastrados e mostrar na tela
            for (let i = 0; i < houses.length; i++) {
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + houses[i].owner +
                    "\nQuartos: " + houses[i].bedrooms +
                    "\nBanheiros: " + houses[i].bathrooms +
                    "\nPossui garagem? " + houses[i].garage 
                )
            }
        break
        case "3":
            alert("Encerrando o programa...")
        break
        default:
            alert("Opção inválida.")
        break
    }
} while (option !== "3")