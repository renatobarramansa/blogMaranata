



function mostrarFuncao(parametro){  
  const letraSeparada = parametro.innerHTML.split('')
  parametro.innerHTML = ''
  letraSeparada.forEach((letra, index) =>{
    setTimeout(() =>
      parametro.innerHTML+=letra, 150 * index
    )
  })
}

const selecionarP = document.querySelector(".imgTopo p");
mostrarFuncao(selecionarP)