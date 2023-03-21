function calcTriangleArea(){
    const base = prompt("Informe a base do triângulo: ")
    const height = prompt("Informe a altura do triângulo: ")
    return base * height / 2
}

function calcRectangleArea(){
    const base = prompt("Informe a base do retângulo: ")
    const height = prompt("Informe a altura do retângulo: ")
    return base  * height
}

function calcSquareArea(){
    const side = prompt("Informe o lado do quadrado: ")
    return side * side
}

function calcTrapeziumArea(){
    const biggerBase = parseFloat(prompt("Informe a base maior do trapézio: "))
    const minorBase = parseFloat(prompt("Informe a base menor do trapézio: "))
    const height = prompt("Informe a altura do trapézio: ")
    return (biggerBase + minorBase) * height / 2
}

function calcCircleArea(){
    const radio = prompt("Informe o raio do círculo: ")
    return(3.14 * radio * radio)
}

function showMenu(){
    return prompt(
    "Calculadora Geométrica\n" +
    "1. Calcular área de triângulo\n" +
    "2. Calcular área de retângulo\n" +
    "3. Calcular área de quadrado\n" +
    "4. Calcular área de trapézio\n" +
    "5. Calcular área de círculo\n" +
    "6. Sair\n"
    )
}

function run(){
    let option = ""

    do {
        option = showMenu()
        let result

        switch (option) {
            case "1":
                result = calcTriangleArea()
                break
            case "2":
                result = calcRectangleArea()
                break  
            case "3":
                result = calcSquareArea()
                break
            case "4":
                result = calcTrapeziumArea()
                break
            case "5":
                result = calcCircleArea()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida.")
        }
        if (result) {
            alert("Resultado " + result)
        }
    } while (option !== "6")
}

run ()