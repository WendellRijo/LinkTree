function toggleMode() {
  //Pegar o HTML
  const html = document.documentElement
  //o comando toggle verifica se possui a classe light, se tiver ele retirar se não tiver ele adiciona.
  html.classList.toggle("light")

  //Pegar tag img
  const img = document.querySelector("#profile img")

  //Substituir imagem
  //se tiver light mode, adicionar a imagem light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
    //se tiver sem o light mode, mater a imagem normal
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}