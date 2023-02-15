//TO DO
/**
 * Recuperar session storage: check!
 * Mostrar nombre de los jugadores en pantalla: check!
 * Realizar Contador:
 * Que pierda un turno si no mueve ficha en 20 segundos:
 * Logica del tablero:
 */

//Recuperamos los datos del session storage.
const nombresJugadores = JSON.parse(sessionStorage.getItem('jugadores'));

//Sobreescribimos el HTML.
document.getElementById("player-one-name").innerHTML = nombresJugadores.player1;
document.getElementById("player-two-name").innerHTML = nombresJugadores.player2;

//Comienza lógica del tablero.

//Vamos a empezar con el temporizador de turnos:

let temporizador = false;
let timer = 60;
let muestraTimer = document.getElementById("contador");
let finTimer = null;


const cuentaTiempo = () => {

    finTimer = setInterval(()=>{
        timer--;
        muestraTimer.innerHTML = timer;
        if(timer == 0){
            clearInterval(finTimer);
//AÑADIR UN FIN DEL JUEGO POR TIMEOUT
        }
    }, 1000);

}

if(temporizador == false){
    cuentaTiempo();
    temporizador = true;  
}






/* EJEMPLO DEL PROFESOR

let tablero = Array.from(document.getElementsByClassName("celdas"));

let turno = true;

let fichaP1 = 3;
let fichaP2 = 3;

let miTablero = ["","","","","","","","",""];

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

const comprueboGanador = () => {
    console.log(miTablero);

}

tablero.map(
    (celda) => {
        celda.addEventListener('click', ()=> {

            //Ejemplo de como añadir una clase a un elemento seleccionado
            // celda.classList.add('cellDesign2');

            //Ejemplo de inyección de HTML desde JavaScript
            // celda.innerHTML = `<p class='devil'>NUNCA LO ACABARAS</p>`;

            if((celda.innerHTML === "") && (fichaP1 > 0 || fichaP2 > 0)){
                celda.innerHTML = (turno) ? "X" : "O";

                (turno) ? fichaP1-- : fichaP2--;

                miTablero[celda.id] = (turno) ? "X" : "O";

                comprueboGanador();

                //Cambiamos de turno
                turno = !turno;
            }
        })
    }
)

*/