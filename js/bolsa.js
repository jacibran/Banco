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
  var slides = document.getElementsByClassName("slide");
  var puntitos = document.getElementsByClassName("puntitos");
  if (n > slides.length) {inicioSlides = 1}
  if (n < 1) {inicioSlides = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < puntitos.length; i++) {
      puntitos[i].className = puntitos[i].className.replace(" active", "");
  }
  slides[inicioSlides-1].style.display = "block";
  puntitos[inicioSlides-1].className += " active";
}

function invierte()
{
var inver = document.getElementById("myPopup");
inver.classList.toggle("show");
}
