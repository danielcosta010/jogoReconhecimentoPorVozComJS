function verificaSeChutePossuiUmValorValido(chute) {
  const numero = +chute;

  if (chuteForInvalido(numero)) {
    if (chute.toUpperCase() === "FIM DE JOGO") {

        document.body.innerHTML =
            `
            <h2>FIM DE JOGO!!!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
            `
            document.body.style.backgroundColor = "black";
    } else {

        elementoChute.innerHTML += '<div>Valor Inválido</div>';
    }
  }

  if(chuteForInvalido(numero)) {
    elementoChute.innerHTML += '<div>Valor Inválido</div>';
    return
  }
  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `
    <div>Valor fora do limite: Fale um numero entre ${menorValor} e ${maiorValor}</div>
    `;
    return
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
      <h2 class="titulo__tela-acerto">Você Acertou!!!!!!!!</h2>
      <h3>O numero secreto era ${numeroSecreto}.</h3>

      <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
    `
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O numero secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
    `
  } else {
    elementoChute.innerHTML += `
    <div>O numero secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
    `
  }
  

}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}
function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
  if (e.target.id == 'jogar-novamente') {
    window.location.reload();
  }
})


