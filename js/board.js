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
let timer = 10;
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


//EJEMPLO DEL PROFESOR

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


tablero.map((celda) => {
        celda.addEventListener('click', ()=> {

            if((celda.innerHTML === "") && (fichaP1 > 0 || fichaP2 > 0)){
                celda.innerHTML = (turno) ? "X" : "O";

                (turno) ? fichaP1-- : fichaP2--;

                miTablero[celda.id-1] = (turno) ? "X" : "O";

                comprueboGanador();

                //Cambiamos de turno
                turno = !turno;
            }
        })
    }
)


//Comprueba ganador by Adrian 

const comprueboGanador = () => {

    //X cells
    const checkX = []
    miTablero.map((value, i) => {
        if(value === "X") checkX.push(i);
    });
    
    const checkO = []
    miTablero.map((value, i) => {
        if(value === "O") checkO.push(i);
    });
    
    //Iterating 'combinacionGanadora' to check player's board
    combinacionGanadora.map((combinacion) => {
        console.log(combinacion.toString(),checkO,checkX);
            if(checkX.toString() === combinacion.toString()){
            console.log("has ganado");
        }
            if(checkO.toString() === combinacion.toString()){
            console.log("has ganado");
        }   if(checkO.toString() !== combinacion.toString() && fichaP1 === 0 && fichaP2 === 0 && checkX.toString() !== combinacion.toString()){
            console.log("Empatasteis");
        }
    });
};
    
