//TO DO
/**
 * Recuperar session storage
 * Mostrar nombre de los jugadores en pantalla
 * Logica del tablero
 */

//Recuperamos los datos del session storage.
const nombresJugadores = JSON.parse(sessionStorage.getItem('jugadores'));

//Sobreescribimos el HTML
document.getElementById("player-one-name").innerHTML = nombresJugadores.player1;
document.getElementById("player-two-name").innerHTML = nombresJugadores.player2;

