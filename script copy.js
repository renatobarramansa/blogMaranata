


function typeWriter(elemento) {
  const letraSeparada = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  letraSeparada.forEach((item, index) => {
    setTimeout(() => elemento.innerHTML+= item, 150 * index);
  });
}
const imgTopo = document.querySelector(".imgTopo p");
typeWriter(imgTopo)