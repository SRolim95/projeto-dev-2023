let deck = []

let option = ""

do {
    option = prompt(
        "Cartas no baralho: " + deck.length +
        "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
    )

    switch (option) {
        case "1":
            let newCard = prompt("Qual carta deseja adicionar?")
            deck.push(newCard)                      //adiciona uma carta na última posição do array "topo do baralho"
            break
        case "2":
            let selectedCard = deck.pop()               //remove a última carta adicionada na pilha do array.
            if (!selectedCard) {
                alert("Não há nenhuma carta no baralho.")
            } else {
                alert("Você puxou a carta: " + selectedCard)
            }
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Opção inválida.")
    }
} while (option !== "3")