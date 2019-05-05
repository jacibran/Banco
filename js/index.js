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
/*creo una función*/
function errores(){
  /*Con esto hará que aparezca un mensaje en conde hemos cogido los datos por el id que sería #errorpwdchar*/
  document.getElementById("errorpwdchar").innerHTML = "";
}
  /*función en la que voy a validar el formulario.*/
function validarformulario() {
  errores();
  /*En estas dos variables meto el contenido de los dos cuadros del formulario, de manera que al insertar y hacer submit, los datos lleguen a este fichero y pasen por las comprobasiones*/
  var username = document.forms["myForm"]["user"].value;
  var pwd = document.forms["myForm"]["pass"].value;

  /*Aquí valido que el nombre de usuario y la contraseña sean iguales que las que indico, sino no pasa*/
  if (username=="USUARIO1" && pwd=="CONTRASENA1") {
    return true;
  }
    /*Aquí hago que si la contraseña es diferente a la indicada no pasa*/
  else if (pwd!=="CONTRASENA1") {
    document.getElementById("errorpwdchar").innerHTML = "Tu contraseña no es correcta";
    return false;
  }
      /*Aquí hago que si el nombre de usuario es diferente a la indicada no pasa*/
  else if (username!=="USUARIO1") {
    document.getElementById("errorpwdchar").innerHTML = "El usuario es incorrecto";
    return false;
  }
      /*Aquí hago que si el nombre de usuario y la contraseña es diferente a la indicada no pasa*/
  else if (username!=="USUARIO1" && pwd!=="CONTRASENA1") {
    document.getElementById("errorpwdchar").innerHTML = "El usuario y la contraseña son incorrectos";
    return false;
  }
}
