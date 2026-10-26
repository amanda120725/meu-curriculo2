const nome = document.querySelector("#nome");
const botaoEditar = document.querySelector("#editar");
const botaoCidade = document.querySelector("#cidade");
const textoCidade = document.querySelector("#textoCidade");
const botaoSair = document.querySelector("#sair");

botaoEditar.addEventListener("click", function() {
    const novoNome = prompt("Digite o nome:");
    if (novoNome !== null && novoNome.trim() !== "") {
        nome.textContent = novoNome.trim();
    }

    const novaCidade = prompt("Digite o nome da cidade:");
    if (novaCidade !== null && novaCidade.trim() !== "") {
        textoCidade.textContent = "cidade: " + novaCidade.trim();
    }
});
 

botaoSair.addEventListener("click", function() {
    const resposta = confirm("Deseja sair do perfil?");
    if (resposta) {
        alert("Você sai do perfil!");
    }
});
