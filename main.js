const botoes = document.querySelectoerAll(".botao");
const textos = document.querySelectoerAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++){ 
    botoes[i].onclick = function(){
        for (let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");

        }

            botoes[i].classList.add("ativo");
            textos[i].classList.add("ativo");
    }
}
const contadores= document.querySelectorAll(".contador");
const tempo0bjetivol = new Date("2025-10-05t00:00:00");
let tempo