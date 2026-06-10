let valor = 0;

const contador = document.querySelector("#contador");
const mais = document.querySelector("#mais");
const menos = document.querySelector("#menos");
const reset = document.querySelector("#reset");

mais.addEventListener("click", () => {
    valor++;
    contador.textContent = valor;
});

menos.addEventListener("click", () => {
    valor--;
    contador.textContent = valor;
});

reset.addEventListener("click", () => {
    valor = 0;
    contador.textContent = valor;
});