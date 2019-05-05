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

/*CALCULADORA*/
/*Recojo cada una de las casillas en las que hay numeros y operandos por su id y creo un evento que al hacer click aparezca en el cuadro*/
document.getElementById("n1").addEventListener("click",n1);
document.getElementById("n2").addEventListener("click",n2);
document.getElementById("n3").addEventListener("click",n3);
document.getElementById("n4").addEventListener("click",n4);
document.getElementById("n5").addEventListener("click",n5);
document.getElementById("n6").addEventListener("click",n6);
document.getElementById("n7").addEventListener("click",n7);
document.getElementById("n8").addEventListener("click",n8);
document.getElementById("n9").addEventListener("click",n9);
document.getElementById("n0").addEventListener("click",n0);
document.getElementById("s").addEventListener("click",o1);
document.getElementById("r").addEventListener("click",o2);
document.getElementById("d").addEventListener("click",o3);
document.getElementById("m").addEventListener("click",o4);
/*hago lo mismo pero aquí muestro el resultado */
document.getElementById("sr").addEventListener("click",mostrarresultado);

/*en esta serie de funciones lo que hago es definir que va a hacer obteniendo por el id donde va a salir el número.*/
function n1() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n1").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n2() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n2").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n3() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n3").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n4() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n4").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n5() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n5").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n6() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n6").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n7() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n7").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n8() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n8").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n9() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n9").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n0() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n0").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function o1() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("s").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function o2() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("r").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function o3() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("d").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function o4() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("m").innerHTML;
	document.getElementById('resultado').innerHTML = actual +  sumado
}
/*Aquí va la función en la que aparece los datos en el resultado haciendo las operaciones*/
function mostrarresultado() {
	let actual = document.getElementById('resultado').innerHTML;
	let suma = actual.indexOf("+");
	let resta = actual.indexOf("-");
	let div = actual.indexOf("÷");
	let mult = actual.indexOf("x");
	if (suma !== -1) {
		arr = actual.split("+",2);
		res = parseInt(arr[0]) + parseInt(arr[1]);
		document.getElementById("resultado").innerHTML = res;
	} else if (resta !== -1) {
		arr = actual.split("-",2);
		res = arr[0] - arr[1];
		document.getElementById("resultado").innerHTML = res;

	} else if (div !== -1) {
		arr = actual.split("÷",2);
		res = arr[0] / arr[1];
		document.getElementById("resultado").innerHTML = res;

	} else if (mult !== -1) {
		arr = actual.split("x",2);
		res = arr[0] * arr[1];
		document.getElementById("resultado").innerHTML = res;

	}
}
