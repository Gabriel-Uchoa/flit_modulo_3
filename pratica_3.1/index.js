function tabuada(num) {
    var contador = 1
    var resultTabuada = []
    while (contador <= 10) {
        resultTabuada.push(num * contador)
        resultTabuada.push((num + 1) * contador)
        resultTabuada.push((num + 2) * contador)
        contador++
    }
    return resultTabuada
}

console.log(tabuada(5))

function PontoDeOnibus(arr) {
    var numPessoasQueEntraram = 0
    var numPessoasQueSairam = 0

    arr.forEach(element => {
        numPessoasQueEntraram = numPessoasQueEntraram + element[0]
        numPessoasQueSairam = numPessoasQueSairam + element[1]
    });

    var total = numPessoasQueEntraram - numPessoasQueSairam
    return total
}
console.log(PontoDeOnibus([[10, 0], [3, 5], [5, 8]]))

function Bingo(arr) {
    const arrSemRepeticao = [...new Set(arr)];
    var bingo = 0
    for (let i = 0; i < arrSemRepeticao.length; i++) {
        if (
            arrSemRepeticao[i] == 2 ||
            arrSemRepeticao[i] == 7 ||
            arrSemRepeticao[i] == 9 ||
            arrSemRepeticao[i] == 14 ||
            arrSemRepeticao[i] == 15
        ) {
            bingo++
        }
    }
    if (bingo == 5) {
        return ("GANHOU")
    } else {
        return ("PERDEU")
    }
}

console.log(Bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]))
