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

function errores(){
  document.getElementById("errorpwdchar").innerHTML = "";
}

function validarformulario() {
  errores();

  var username = document.forms["myForm"]["user"].value;
  var pwd = document.forms["myForm"]["pass"].value;


  if (username=="USUARIO1" && pwd=="CONTRASENA1") {
    return true;
  }
  else if (pwd!=="CONTRASENA1") {
    document.getElementById("errorpwdchar").innerHTML = "Tu contraseña no es correcta";
    return false;
  }
  else if (username!=="USUARIO1") {
    document.getElementById("errorpwdchar").innerHTML = "El usuario es incorrecto";
    return false;
  }
  else if (username!=="USUARIO1" && pwd!=="CONTRASENA1") {
    document.getElementById("errorpwdchar").innerHTML = "El usuario y la contraseña son incorrectos";
    return false;
  }


  if (username=="USUARIO2" && pwd=="CONTRASENA2") {
    return true;
  }
    else if (pwd!=="CONTRASENA2") {
      document.getElementById("errorpwdchar").innerHTML = "Tu contraseña no es correcta";
      return false;
    }
    else if (username!=="USUARIO2") {
      document.getElementById("errorpwdchar").innerHTML = "El usuario es incorrecto";
      return false;
    }
    else if (username!=="USUARIO2" && pwd!=="CONTRASENA2") {
      document.getElementById("errorpwdchar").innerHTML = "El usuario y la contraseña son incorrectos";
      return false;
    }
  }
