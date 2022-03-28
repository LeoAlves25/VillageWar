document.getElementById("pvpUi").style.display = "none"; // Esconder elemtentos do PVP
document.getElementById("pvmUi").style.display = "none"; // Esconder elemtentos do PVM
mandarCartasCompradasParaMinhaBag(); // Carregar os minhasCartas para o Jogar.js

// Trazer o deck para o jogo
var deck = localStorage.getItem("deck").length == 0 ? "" : localStorage.getItem("deck").split(",");
console.log(deck);

var carta1 = minhasCartas.filter(function(carta){ return carta.getIdCarta == deck[0]});
var carta2 = minhasCartas.filter(function(carta){ return carta.getIdCarta == deck[1]});
var carta3 = minhasCartas.filter(function(carta){ return carta.getIdCarta == deck[2]});

document.getElementById("modoPvp").addEventListener("click", () => {
    comecarPvp();
});

document.getElementById("modoPvm").addEventListener("click", () => {
    comecarPvm();
});

function comecarPvp(){
    if(deck.length < 3){
        alert("Você precisa de um deck completo para jogar o PVP.");
    } else {
        document.getElementById("modosDeJogoBckg").style.display = "none";
        document.getElementById("pvpUi").style.display = "block";
        document.getElementById("menuJogo").style.backgroundImage = "url(../imgs/modos/backgroundPvp.png)"
    }
}

function comecarPvm(){
    if(deck.length < 3){
        alert("Você precisa de um deck completo para jogar o PVM.");
    } else {
        document.getElementById("modosDeJogoBckg").style.display = "none";
        document.getElementById("pvmUi").style.display = "block";
        document.getElementById("menuJogo").style.backgroundImage = "url(../imgs/modos/backgroundPvm.png)"
    }
}

document.getElementById("carta3ataque").addEventListener("click", () => {
    document.getElementById("carta3ataque").style.left = "340px";
});

document.getElementById("carta3ataque").addEventListener("dblclick", () => {
    document.getElementById("carta3ataque").style.left = "40px";
});