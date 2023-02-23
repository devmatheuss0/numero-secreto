function verificaOChute(chute){
  const numero = +chute

  if(chuteForInvalido(numero)){
    elementoChute.innerHTML += '<div>Valor inválido: o valor precisa ser um número</div>'
    return
  }
  if(numeroForMaiorOuMenor(numero)){
    elementoChute.innerHTML += `<div> Valor inválido: fale um número entre ${menorValor} e ${maiorValor} </div>`
    return
  }

  if(numero === numberRandom ){
    document.body.innerHTML = `<h2>Você acertou! </h2>
    <h3>O número secreto era ${numberRandom} </h3>
`
  } else if(numero > numberRandom){
    elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>'
  } else {
    elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>'
  }

}

function chuteForInvalido(numero){
  return Number.isNaN(numero)
}
function numeroForMaiorOuMenor(numero){
  return numero > maiorValor || numero < menorValor 
} 
document.body.addEventListener('click', e => {
  if(e.target.id =='jogar-novamente'){
    window.location.reload()
  }
})
