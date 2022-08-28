var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
       valores.push(Number(num.value))//adicionar valores na lista
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) //retorno visual
        res.innerHTML = '' //limpar resultado
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()//limpar números 

}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let totalE = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) { //analisar um por um qual o menor e o maior valor, laço de percurso.
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / totalE
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${totalE} números cadastrados.</p> `
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p> `
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p> `
        res.innerHTML += `<p> Somando todos os valores  temos ${soma}.</p> `
        res.innerHTML += `<p> A média dos valores difitados é ${media}.</p> `
        

    }
}

