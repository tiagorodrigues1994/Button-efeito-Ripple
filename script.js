// chamando a class
var btn = document.querySelector(".button");
// movimento do mouse
btn.onmousemove = function (e) {
  // linha que pega o movimento do mouse no eixo "X"
  var x = e.pageX - btn.offsetLeft;
  // linha que pega o movimento do mouse no eixo "y"
  var y = e.pageY - btn.offsetTop;

  //   aplicando alguns estilos pelo JS
  btn.style.setProperty('--eixoX', x + 'px');
  btn.style.setProperty('--eixoY', y + 'px');
};
