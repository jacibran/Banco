function desplegable() {
  document.getElementById("DESPLEGABLE").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.botondes')) {
  var myDropdown = document.getElementById("DESPLEGABLE");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

var inicioSlides = 1;
mostrarSlides(inicioSlides);

function mas(n) {
  mostrarSlides(inicioSlides += n);
}

function DIAactual(n) {
  mostrarSlides(inicioSlides = n);
}

function mostrarSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");//llama al elemento//
  var puntitos = document.getElementsByClassName("puntitos");//llama al elemento//
  if (n > slides.length) {inicioSlides = 1}//n es un valor, el cual va adquiriendo valores y si es mayor que la longittud del elementoa avanzara//
  if (n < 1) {inicioSlides = slides.length}//n es un valor, el cual va adquiriendo valores y si es menor que la longittud del elementoa retrocedera//
  for (i = 0; i < slides.length; i++) { //con este funcion haremos que incremente el valor de i para asi avanzar o retoceder//
      slides[i].style.display = "none";////y con esta parque haremos que se oculte las flechas cuando no esten en función//
  }
  for (i = 0; i < puntitos.length; i++) {
      puntitos[i].className = puntitos[i].className.replace(" active", "");//con esta funcion le damos las propiedades a los puntos y poder avanzar y retroceder por la imagenes según el punto que seleccionemos//
  }
  slides[inicioSlides-1].style.display = "block";//esta funcion fija las flechas de navegación sobre las fotos//
  puntitos[inicioSlides-1].className += " active";//esta funcion indica que punto esta activo//
}

function invierte()
{
var inver = document.getElementById("myPopup");
inver.classList.toggle("show");
}
//esta función toma el valor del onclick de manera booleana,por tanto si es verdadero mostrará el elemnto y si es falso no lo mostrará//
