//Recuperamos los datos del session storage.
const nombresJugadores = JSON.parse(sessionStorage.getItem("jugadores"));

// //Sobreescribimos el HTML.
document.getElementById("winner").innerHTML = `Felicidades ${nombresJugadores.player1} has ganado. -> <a href="../index.html">Pulsa aqui.</a>`
