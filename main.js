const form = document.getElementById('form-atividade')
const imgaprovado = '<img src="./img/aprovado.png" alt = "emoji aprovado" />'
const imgreprovado = '<img src="./img/reprovado.png" alt = "emoji reprovado" />'
const atividades = []
const notas = []
const spanaprovado = '<span class = "resultado aprovado">aprovado</span>'
const spanreprovado = '<span class = "resultado reprovado">reprovado</span>'
const notaminima = parseFloat(prompt('Digite a nota minima:'))

let linhas = ""

form.addEventListener('submit' , function(a){
    a.preventDefault() //preventDefault serve para não atualizar a pagina// 

    adicionalinha()
    atualizatabela()
    atualizamedias()
    
})



function adicionalinha () {
    const nomeatividade = document.getElementById('nome-atividade')
    const notaatividade = document.getElementById('nota-atividade')

    if (atividades.includes(nomeatividade.value)) {
        alert(`A atividade :${nomeatividade.value} já foi inserida`)
    }else{
        atividades.push(nomeatividade.value)
    notas.push(parseFloat(notaatividade.value))

    let linha = '<tr>'

    linha += `<td>${nomeatividade.value}</td>`
    linha += `<td>${notaatividade.value}</td>`
    linha += `<td>${notaatividade.value >=notaminima ? imgaprovado : imgreprovado}</td>`//o ponto de ?(significa o IF) o sinal de :(significa o ELSE)
    linha += '</tr>'

    linhas += linha
    }

    

    

    nomeatividade.value = ""
    notaatividade.value = ""

}

function atualizatabela () {
    const corpotabela = document.querySelector('tbody')
    corpotabela.innerHTML = linhas
}

function atualizamedias() {
    const mediafinal = calculamediafinal()

    document.getElementById('media-final-valor').innerHTML=mediafinal
    document.getElementById('media-final-resultado').innerHTML=mediafinal>=notaminima ? spanaprovado : spanreprovado
    
    
    
}

function calculamediafinal() {
    let somasdasnotas = 0

    for (let a = 0; a < notas.length; a++) {
        somasdasnotas += notas[a]
    }

    return somasdasnotas/notas.length
}