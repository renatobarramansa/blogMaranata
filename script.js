//Efeito de letras digitadas...
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

//Scrool Suave

const seta = document.querySelector('.flex a')
const caminho = document.getElementById('teste')


function scrollToSection(event) {
  event.preventDefault()
  const href = event.currentTarget.getAttribute('href')
  const pegarAtributoDoHref = document.querySelector(href) /** Seleciono o id do elemento que quero pegar */
  
  pegarAtributoDoHref.scrollIntoView({
    behavior:'smooth',
    block:'start',
  })
  
}

seta.addEventListener('click', scrollToSection)