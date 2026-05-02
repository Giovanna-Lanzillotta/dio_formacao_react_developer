// window.document.getElementById('title').remove()

const titulo = document.getElementById('nome-pokemon');
const botao = document.getElementById('btn-atualizar');

botao.addEventListener('click', () => {
    titulo.innerText = "Pikachu";
    titulo.style.color = "#FFCB05"; // Amarelo Pokémon
});