let row = []  //criar uma fila vazia//

let option = "" //variável para menu interativo

do {
    let patients = ""
    for (let i = 0; i < row.length; i++) {
        patients += (i + 1) + "º - " + row[i] + "\n"
    }

    option = prompt(
    "Pacientes:\n" + patients +
    "\nEscolha uma ação:\n1. Novo paciente\n2. Consultar paciente\n3. Sair"
    )
    switch (option) {
        case "1":
            const newPatient = prompt("Qual é o nome do paciente?")
            row.push(newPatient)
            break
        case "2":
            const checkPatient = row.shift()
            if (checkPatient) {
                alert(checkPatient + " foi removido da fila.")
            } else {
                alert("Não há pacientes na fila!")
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
    }
} while (option !== "3");