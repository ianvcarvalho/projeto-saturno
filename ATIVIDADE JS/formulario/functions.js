const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    const dados = new FormData(formulario);

    const nome = dados.get("nome");
    const email = dados.get("email");
    const curso = dados.get("curso");

    resultado.innerHTML = `
        <h2>Dados enviados</h2>
        <p>Nome: ${nome}</p>
        <p>E-mail: ${email}</p>
        <p>Curso: ${curso}</p>
    `;

});