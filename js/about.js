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
