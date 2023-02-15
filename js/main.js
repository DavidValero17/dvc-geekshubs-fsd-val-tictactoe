//TO DO
//Recoger el valor del input.
//Y guardarlo en session storage.

let datosJugadores = {
    player1: "",
    player2: "",
}

let inputs = Array.from(document.querySelectorAll("input"));

let boton = document.querySelector("button");

const cambiaNombres = (event) => {

    const input = event.target;
    const name = input.name;
    const value = input.value;
    datosJugadores[name] = value;

}


inputs.map((input) => input.addEventListener('input', cambiaNombres))

boton.addEventListener('click', (event) => {

    console.log(event)

    sessionStorage.setItem("jugadores", JSON.stringify(datosJugadores));    
})