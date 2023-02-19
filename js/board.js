//TO DO
/**
 * Recuperar session storage: check!
 * Mostrar nombre de los jugadores en pantalla: check!
 * Realizar Contador:
 * Que pierda un turno si no mueve ficha en 20 segundos:
 * Logica del tablero:
 */

//Recuperamos los datos del session storage.
const nombresJugadores = JSON.parse(sessionStorage.getItem("jugadores"));

//Sobreescribimos el HTML.
document.getElementById("player-one-name").innerHTML = nombresJugadores.player1;
document.getElementById("player-two-name").innerHTML = nombresJugadores.player2;



//Vamos a empezar con el temporizador de turnos:

let temporizador = false;
let timer = 60;
let muestraTimer = document.getElementById("contador");
let finTimer = null;

const cuentaTiempo = () => {
  finTimer = setInterval(() => {
    timer--;
    muestraTimer.innerHTML = timer;
    if (timer == 0) {
      clearInterval(finTimer);
      mostrarResultado('Se os acabó el tiempo');
    }
  }, 1000);
};

if (temporizador == false) {
  cuentaTiempo();
  temporizador = true;
}

//Aqui comienza la lógica del tablero

let tablero = Array.from(document.getElementsByClassName("celdas"));

let turno = true;

let fichaP1 = 3;
let fichaP2 = 3;

let miTablero = ["", "", "", "", "", "", "", "", ""];

let combinacionGanadora = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

tablero.map((celda) => {
  celda.addEventListener("click", () => {
    if (celda.innerHTML === "" && (fichaP1 > 0 || fichaP2 > 0)) {
      celda.innerHTML = turno ? "X" : "O";

      turno ? fichaP1-- : fichaP2--;

      miTablero[celda.id - 1] = turno ? "X" : "O";

      comprueboGanador();

      //Para cambiar el turno
      turno = !turno;
    }
  });
});

//Comprueba ganador

const mostrarResultado = (resultado) => {
    alert(resultado);
};

const comprueboGanador = () => {
  //Comprueba X
  const checkX = [];
  miTablero.map((value, i) => {
    if (value === "X") checkX.push(i);
  });
//Comprueba O
  const checkO = [];
  miTablero.map((value, i) => {
    if (value === "O") checkO.push(i);
  });

  let resultado = "Habeis quedado empate";
  
  //Aqui empieza la combinacion ganadora
  combinacionGanadora.map((combinacion) => {
    if (checkX.toString() === combinacion.toString()) {
      resultado = nombresJugadores.player1;
      mostrarResultado(`Ha ganado ${nombresJugadores.player1}`);
    }
    if (checkO.toString() === combinacion.toString()) {
      resultado = nombresJugadores.player2;
      mostrarResultado(`Ha ganado ${nombresJugadores.player2}`);
    }
  });
  if (fichaP1 === 0 && fichaP2 === 0 && resultado === "Habeis quedado empate") {
    mostrarResultado(resultado)
  }
};


