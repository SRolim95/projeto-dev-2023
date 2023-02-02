const touristName = prompt("Olá, turista. Qual é o seu nome?")
let cities = ""
let totalCities = 0

let continueQuestion = prompt("Você já visitou alguma cidade? (Sim/Não")

while (continueQuestion === "Sim") {
    let citiesNames = prompt("Qual cidade você visitou?")
    cities += " - " + citiesNames + "\n"
    totalCities++
    continueQuestion = prompt(touristName + ', ' + "você visitou outra cidade? (Sim/Não)")
}

alert(
"Turista: " + touristName +
"\nTotal de cidades visitadas: " + totalCities +
"\nLista das cidades visitadas:\n" + cities
)