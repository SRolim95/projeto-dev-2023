const meterValue = prompt("Informe o valor em metros para que a conversão seja realizada:")
const conversionOption = prompt(
    "Selecione a opção de conversão desejada:"+
    "\na)milímetro (mm)" +
    "\nb)centímetro (cm)" +
    "\nc)decímetro (dm)" +
    "\nd)decâmetro (dam)" +
    "\ne)hectômetro (hm)" +
    "\nf)quilômetro (km)"
)

const meter = parseFloat(meterValue)

const millimiter = meter * 1000
const centimeter = meter * 100
const decimeter = meter * 10
const decameter = meter / 10
const hectometer = meter / 100
const kilometer = meter / 1000

 switch (conversionOption){
    case "a":
        alert("o resultado da conversão é: " + meter + "m = " + millimiter + "mm")
        break
    case "b":
        alert("o resultado da conversão é: " + meter + "m = " + centimeter + "cm")
        break
    case "c":
        alert("o resultado da conversão é: " + meter + "m = " + decimeter + "dm")
        break
    case "d":
        alert("o resultado da conversão é: " + meter + "m = " + decameter + "dam")
        break
    case "e":
         alert("o resultado da conversão é: " + meter + "m = " + hectometer + "hm")
         break
    case "f":
        alert("o resultado da conversão é: " + meter + "m = " + kilometer + "km")
        break
    default:
        alert("A opção selecionada é inválida.") 
 }