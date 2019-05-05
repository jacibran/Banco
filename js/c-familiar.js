/*Declaramos la función*/
function desplegable() {
  /*Con esto hacemos que se muestre pero hay que poner que cuando haga click se abra*/
  document.getElementById("DESPLEGABLE").classList.toggle("show");
}

/*con windows onclick hacemos que al hacer click haga la funcion que le asignemos*/
window.onclick = function(e) {
  if (!e.target.matches('.botondes')) {
    /*Aquí en var MyDROPDOWN obtenemos el valor por el id que es #DESPLEGABLE y hacemos que si esta abierto al hacer click lo cierre y si está cerrado que lo abra al hacer click.*/
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
