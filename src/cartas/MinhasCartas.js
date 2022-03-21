let minhasCartasNomes = localStorage.getItem("cartasNome").split("_");
minhasCartasNomes.pop();
console.log(minhasCartasNomes);

let minhasCartasRaridades = localStorage.getItem("cartasRaridade").split("_");
minhasCartasRaridades.pop();
console.log(minhasCartasRaridades);

let minhasCartasImagens = localStorage.getItem("cartasImagens").split("*");
minhasCartasImagens.pop();
console.log(minhasCartasImagens);

function carregarMinhasCartas(){
    if(minhasCartasImagens.length == 0) 
        return;
    document.getElementById("minhaCarta1").src = minhasCartasImagens[0];
    document.getElementById("minhaCarta2").src = minhasCartasImagens[1];
    document.getElementById("minhaCarta3").src = minhasCartasImagens[2];
}

carregarMinhasCartas();