// Para evitar q o player saia durante o jogo;
var jogando = false;

document.getElementById("pvpUi").style.display = "none"; // Esconder elemtentos do PVP
document.getElementById("pvmUi").style.display = "none"; // Esconder elemtentos do PVM
mandarCartasCompradasParaMinhaBag(); // Carregar os minhasCartas para o Jogar.js

// Trazer o deckIds para o jogo
var deckIds = localStorage.getItem("deck").length == 0 ? "" : localStorage.getItem("deck").split(",");
var deck = []; // Deck com as cartas em objs!

var carta1ataque = minhasCartas.filter(function(carta){ return carta.getIdCarta == deckIds[0]});
var carta2ataque = minhasCartas.filter(function(carta){ return carta.getIdCarta == deckIds[1]});
var carta3ataque = minhasCartas.filter(function(carta){ return carta.getIdCarta == deckIds[2]});
deck.push(carta1ataque[0],carta2ataque[0],carta3ataque[0]); // Com fundo

removerFundoDasCartasAtaque(deck[0]);
removerFundoDasCartasAtaque(deck[1]);
removerFundoDasCartasAtaque(deck[2]);

console.log(deck); // Cartas sem fundo

document.getElementById("modoPvp").addEventListener("click", () => {
    validacaoPvp()
});

document.getElementById("modoPvm").addEventListener("click", () => {
    validacaoPvm();
});

function comecarPvp(){
    jogando = true;
    document.getElementById("modosDeJogoBckg").style.display = "none";
    document.getElementById("pvpUi").style.display = "block";
    document.getElementById("menuJogo").style.backgroundImage = "url(../imgs/modos/backgroundPvp.png)";

    carregarPersonagensNaTela();

    document.getElementById("carta1ataque").addEventListener("click", () => {
        document.getElementById("carta1ataque").style.left = "340px";
    });
    
    document.getElementById("carta1ataque").addEventListener("dblclick", () => {
        document.getElementById("carta1ataque").style.left = "40px";
    });

    document.getElementById("carta2ataque").addEventListener("click", () => {
        document.getElementById("carta2ataque").style.left = "340px";
    });
    
    document.getElementById("carta2ataque").addEventListener("dblclick", () => {
        document.getElementById("carta2ataque").style.left = "110px";
    });

    document.getElementById("carta3ataque").addEventListener("click", () => {
        document.getElementById("carta3ataque").style.left = "340px";
    });
    
    document.getElementById("carta3ataque").addEventListener("dblclick", () => {
        document.getElementById("carta3ataque").style.left = "50px";
    });
}

function comecarPvm(){
    jogando = true;
    document.getElementById("modosDeJogoBckg").style.display = "none";
    document.getElementById("pvmUi").style.display = "block";
    document.getElementById("menuJogo").style.backgroundImage = "url(../imgs/modos/backgroundPvm.png)";

    carregarPersonagensNaTela();

    document.getElementById("carta1ataquePvm").addEventListener("click", () => {
        document.getElementById("carta1ataquePvm").style.left = "340px";
    });
    
    document.getElementById("carta1ataquePvm").addEventListener("dblclick", () => {
        document.getElementById("carta1ataquePvm").style.left = "40px";
    });

    document.getElementById("carta2ataquePvm").addEventListener("click", () => {
        document.getElementById("carta2ataquePvm").style.left = "340px";
    });
    
    document.getElementById("carta2ataquePvm").addEventListener("dblclick", () => {
        document.getElementById("carta2ataquePvm").style.left = "110px";
    });

    document.getElementById("carta3ataquePvm").addEventListener("click", () => {
        document.getElementById("carta3ataquePvm").style.left = "340px";
    });
    
    document.getElementById("carta3ataquePvm").addEventListener("dblclick", () => {
        document.getElementById("carta3ataquePvm").style.left = "50px";
    });
}

function validacaoPvp(){
    if(deckIds.length < 3){
        alert("Você precisa de um deck completo para jogar o PVP.");
    } else {
        comecarPvp();
    }
}

function validacaoPvm(){
    if(deckIds.length < 3){
        alert("Você precisa de um deck completo para jogar o PVM.");
    } else {
        comecarPvm();
    }
}

function removerFundoDasCartasAtaque(carta) {
    switch(carta.getRaridade){
        case "Comum":
            switch(carta.getImgCarta){
                case "imgs/personagens/Cavaleiro/Cavaleiro_comum.png":
                    carta.imgCarta = "imgs/personagens/Cavaleiro/Cavaleiro_semfundo.gif";
                break;
                case "imgs/personagens/Estalajadeiro/Estalajadeiro_comum.png":
                    carta.imgCarta = "imgs/personagens/Estalajadeiro/Estalajadeiro_semfundo.png";
                break;
                case "imgs/personagens/Ferreiro/Ferreiro_comum.png":
                    carta.imgCarta = "imgs/personagens/Ferreiro/Ferreiro_semfundo.png";
                break;
                case "imgs/personagens/Gladiador/Gladiador_comum.png":
                    carta.imgCarta = "imgs/personagens/Gladiador/Gladiador_semfundo.png";
                break;
                case "imgs/personagens/Mago/Mago_comum.png":
                    carta.imgCarta = "imgs/personagens/Mago/Mago_semfundo.gif";
                break;
                case "imgs/personagens/MedicoDaPeste/MedicoDaPeste_comum.png":
                    carta.imgCarta = "imgs/personagens/MedicoDaPeste/MedicoDaPeste_semfundo.gif";
                break;
                case "imgs/personagens/Ninja/Ninja_comum.png":
                    carta.imgCarta = "imgs/personagens/Ninja/Ninja_semfundo.png";
                break;
            }
        break;
        case "Raro":
            switch(carta.getImgCarta){
                case "imgs/personagens/Cavaleiro/Cavaleiro_raro.png":
                    carta.imgCarta = "imgs/personagens/Cavaleiro/Cavaleiro_semfundo.gif";
                break;
                case "imgs/personagens/Estalajadeiro/Estalajadeiro_raro.png":
                    carta.imgCarta = "imgs/personagens/Estalajadeiro/Estalajadeiro_semfundo.png";
                break;
                case "imgs/personagens/Ferreiro/Ferreiro_raro.png":
                    carta.imgCarta = "imgs/personagens/Ferreiro/Ferreiro_semfundo.png";
                break;
                case "imgs/personagens/Gladiador/Gladiador_raro.png":
                    carta.imgCarta = "imgs/personagens/Gladiador/Gladiador_semfundo.png";
                break;
                case "imgs/personagens/Mago/Mago_raro.png":
                    carta.imgCarta = "imgs/personagens/Mago/Mago_semfundo.gif";
                break;
                case "imgs/personagens/MedicoDaPeste/MedicoDaPeste_raro.png":
                    carta.imgCarta = "imgs/personagens/MedicoDaPeste/MedicoDaPeste_semfundo.gif";
                break;
                case "imgs/personagens/Ninja/Ninja_raro.png":
                    carta.imgCarta = "imgs/personagens/Ninja/Ninja_semfundo.png";
                break;
            }
        break;
        case "Lendario":
            switch(carta.getImgCarta){
                case "imgs/personagens/Cavaleiro/Cavaleiro_lendario.png":
                    carta.imgCarta = "imgs/personagens/Cavaleiro/Cavaleiro_semfundo.gif";
                break;
                case "imgs/personagens/Estalajadeiro/Estalajadeiro_lendario.png":
                    carta.imgCarta = "imgs/personagens/Estalajadeiro/Estalajadeiro_semfundo.png";
                break;
                case "imgs/personagens/Ferreiro/Ferreiro_lendario.png":
                    carta.imgCarta = "imgs/personagens/Ferreiro/Ferreiro_semfundo.png";
                break;
                case "imgs/personagens/Gladiador/Gladiador_lendario.png":
                    carta.imgCarta = "imgs/personagens/Gladiador/Gladiador_semfundo.png";
                break;
                case "imgs/personagens/Mago/Mago_lendario.png":
                    carta.imgCarta = "imgs/personagens/Mago/Mago_semfundo.gif";
                break;
                case "imgs/personagens/MedicoDaPeste/MedicoDaPeste_lendario.png":
                    carta.imgCarta = "imgs/personagens/MedicoDaPeste/MedicoDaPeste_semfundo.gif";
                break;
                case "imgs/personagens/Ninja/Ninja_lendario.png":
                    carta.imgCarta = "imgs/personagens/Ninja/Ninja_semfundo.png";
                break;
                case "imgs/personagens/Principe/Principe_lendario.png":
                    carta.imgCarta = "imgs/personagens/Principe/Principe_semfundo.png";
                break;
                case "imgs/personagens/Rei/Rei_lendario.png":
                    carta.imgCarta = "imgs/personagens/Rei/Rei_semfundo.png";
                break;
            }
        break;
        case "Mitico":
            switch(carta.getImgCarta){
                case "imgs/personagens/Noel/Noel_mitico.png":
                    carta.imgCarta = "imgs/personagens/Noel/Noel_semfundo.png";
                break;
                case "imgs/PauloCirillo_mitico.png":
                    carta.imgCarta = "imgs/PauloCirillo_semfundo.gif";
                break;
            }
        break;
    }
}

function carregarPersonagensNaTela(){
    document.getElementById("carta1ataque").src = deck[0].getImgCarta;
    document.getElementById("carta2ataque").src = deck[1].getImgCarta;
    document.getElementById("carta3ataque").src = deck[2].getImgCarta;
}