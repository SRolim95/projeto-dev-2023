const number  = prompt ("Informe um número e veja a mágica acontecer:")

let result = ""

for (let factor = 1; factor <= 20; factor++){
    result += " -> " + number + " x " + factor + " = " + (number * factor) + "\n"
}

alert("Resultado da tabuada de " + number + ":\n\n" + result)