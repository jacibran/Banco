
/*Delaramos la funcion*/
function filter() {
/*Creamos las variables*/
  var valoor,nombree,perfiil,i;
/*Indicamos los datos que debe de coger por el ID y el CLASS (EL VALOR EN MAYÚSCULAS)*/
  valoor = document.getElementById("valor").value.toUpperCase();
  perfiil = document.getElementsByClassName("perfil");
/*recorremos el array perfiil con un ciclo for y en cada iteración preguntamos si el número actual es mayor que -1.*/
  for(i=0;i<perfiil.length;i++){
    nombree = perfiil[i].getElementsByClassName("nombre");
    if (nombree[0].innerHTML.toUpperCase().indexOf(valoor) > -1) {
      perfiil[i].style.display = "flex";
    }else{
      perfiil[i].style.display = "none";
    }
  }

}
