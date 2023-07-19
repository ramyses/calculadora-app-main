const tecla = document.querySelectorAll('.tecla')

tecla.forEach( btn=> btn.addEventListener('click', exibirValorDaTeclaClicada))

function exibirValorDaTeclaClicada() {
  const elementoBtn = document.getElementById(this.id)

  const valor = elementoBtn.value;
  console.log( valor )
}

//chamda da operação:
const operacao = ['somar','subtrair','multiplicar','dividir']
