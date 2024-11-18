//Aca el juego selecciona un número aleatorio para que adivinen
// se redonde para abajo y entre 1 y 100

let numeroAzar = Math.floor(Math.random() * 100) + 1;

let numeroEntrada = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje");
let intentos = document.getElementById("intentos");
const boton = document.getElementById("comprobar");
let cont = 10;
// Función para comprobar el número ingresado
function chequearResultado() {
  let numeroIngresado = parseInt(numeroEntrada.value);
  console.log(numeroIngresado);

  cont--;
  console.log(cont);
  intentos.textContent = cont;
  if (cont === 0) {
    mensaje.textContent = "Has perdido 😒, el número era " + numeroAzar;
    boton.disabled = true;
    boton.style.backgroundColor = "red";
    return;
  }

  if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
    mensaje.textContent =
      "Por favor, introduce un número valido entre 1 y 100.";
    mensaje.style.color = "red";
    return;
  }

  if (numeroIngresado === numeroAzar) {
    mensaje.textContent = "¡Felicidades! ¡Has adivinado el número correcto!";
    mensaje.style.color = "green";
    boton.disabled = true;
  } else if (numeroIngresado < numeroAzar) {
    mensaje.textContent = "El número es mayor. Intenta de nuevo.";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "El número es menor. Intenta de nuevo.";
    mensaje.style.color = "red";
  }
}
