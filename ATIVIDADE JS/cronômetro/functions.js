let segundos = 0;
let intervalo = null;

const tempo = document.querySelector("#tempo");

document.querySelector("#iniciar").addEventListener("click", () => {

    if (!intervalo) {
        intervalo = setInterval(() => {
            segundos++;
            tempo.textContent = segundos;
        }, 1000);
    }

});

document.querySelector("#pausar").addEventListener("click", () => {

    clearInterval(intervalo);
    intervalo = null;

});

document.querySelector("#resetar").addEventListener("click", () => {

    clearInterval(intervalo);
    intervalo = null;
    segundos = 0;
    tempo.textContent = segundos;

});