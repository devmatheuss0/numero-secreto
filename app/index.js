const menorValor = 1
const maiorValor = 1000
const numberRandom = gerarNumberRandom()

function gerarNumberRandom(){
  return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número Secreto:' , numberRandom)

const elementoMenor = document.getElementById('spanMenor')
elementoMenor.innerHTML = menorValor;

const elementoMaior = document.querySelector('#spanMaior')
elementoMaior.innerHTML = maiorValor;
