const word = prompt("Informe uma palavra para verificar se é um palíndromo:") //perguntar a palavra

let invertedWord = "" // variável utilizada pra armazenar uma string qualquer

for(let i = word.length - 1; i >=0; i--){  // usei o i para atribuir ao tamanho da palavra.length(tamanho total da palavra)
                                           //-1 "começar a contagem pela última letra, e não a primeira" i-- serve também pro mesmo propósito
    invertedWord += word[i]                //aqui usei a invertedWord pra concatenar e armazenar na variável as letras da var word de trás pra frente
}

if (word === invertedWord){
alert(word + " é um palíndromo!")
} else{
    alert(
    word + " não é um palíndromo!\n\n" +
    word + " !== " + invertedWord
    )
}