const botonPista = document.getElementById("boton-pista");
const cajaPista = document.getElementById("caja-pista");

botonPista.addEventListener("click", function() {
    if (cajaPista.style.display === "block") {
        cajaPista.style.display = "none";
        botonPista.textContent = "Revelar Pista Secreta";
    } else {
        cajaPista.style.display = "block";
        botonPista.textContent = "Ocultar Pista Secreta";
    }
});