//Aca el juego selecciona un número aleatorio para que adivinen
// se redonde para abajo y entre 1 y 100

let numeroAzar = Math.floor(Math.random() * 100) + 1;

let numeroEntrada = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje");
let intentos = document.getElementById("intentos");
const boton = document.getElementById("comprobar");
const reset = document.getElementById("reset");
const mago = document.querySelector(".mago");
const jsConfetti = new JSConfetti();

let cont = 10;

// Función para comprobar el número ingresado
boton.addEventListener("click", chequearResultado);
function chequearResultado() {
  let numeroIngresado = parseInt(numeroEntrada.value);
  const res = typeof numeroIngresado;

  console.log(res);

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
    jsConfetti.addConfetti({
      emojis: ["⚡️", "💥", "✨", "💫"],
      emojiSize: 70,
      confettiNumber: 200,
    });
    return;
  } else if (numeroIngresado < numeroAzar) {
    mensaje.textContent = "El número es mayor. Intenta de nuevo.";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "El número es menor. Intenta de nuevo.";
    mensaje.style.color = "red";
  }

  cont--;
  intentos.textContent = cont;

  if (cont === 0) {
    mensaje.textContent = "Has perdido 😒, el número era " + numeroAzar;
    boton.disabled = true;
    boton.style.backgroundColor = "red";
    return;
  }
}

// Función para reiniciar el juego
reset.addEventListener("click", () => {
  numeroAzar = Math.floor(Math.random() * 100) + 1;
  numeroEntrada.value = "";
  mensaje.textContent = "A Jugar !!!";
  intentos.textContent = 10;
  cont = 10;
  boton.disabled = false;
  boton.style.backgroundColor = "#4CAF50";
});
