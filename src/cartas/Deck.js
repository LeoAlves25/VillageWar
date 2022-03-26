//Deck
var deckIds = []; //Deck com objs
var deckLocal = []; //Deck com #IdCards *Não Objs* (LocalStorage)

if(localStorage.getItem("deck").length != 0){
    deckLocal = [localStorage.getItem("deck")];
    deckIds = localStorage.getItem("deck").split(",");
    //deckIds.pop();
}

console.log(deckLocal);
console.log(deckIds);

var carta1 = minhasCartas.filter(function(carta){ return carta.getIdCarta == deckIds[0]});
var carta2 = minhasCartas.filter(function(carta){ return carta.getIdCarta == deckIds[1]});
var carta3 = minhasCartas.filter(function(carta){ return carta.getIdCarta == deckIds[2]});
var deck = [];
deck.push(carta1[0],carta2[0],carta3[0]);
console.log(deck);
function carregarDeck(){
    $deckCarta1Img = document.getElementById("deckCarta1Img");
    $deckCarta1Img.src = deck[0].getImgCarta;
    $numeracaoDeckId = document.getElementById("numeracaoDeckId");
    $numeracaoDeckId.innerHTML = "#"+deck[0].getIdCarta;
    $deckCarta2Img = document.getElementById("deckCarta2Img");
    $deckCarta2Img.src = deck[1].getImgCarta;
    $numeracaoDeckId2 = document.getElementById("numeracaoDeckId2");
    $numeracaoDeckId2.innerHTML = "#"+deck[1].getIdCarta;
    $deckCarta3Img = document.getElementById("deckCarta3Img");
    $deckCarta3Img.src = deck[2].getImgCarta;
    $numeracaoDeckId3 = document.getElementById("numeracaoDeckId3");
    $numeracaoDeckId3.innerHTML = "#"+deck[2].getIdCarta;
};

function removerDoDeck(){
    if(deckIds.length == 0)
        return;
    if(localStorage.getItem("deck").length == 7){
        localStorage.setItem("deck", localStorage.getItem("deck").replace(deck[0].getIdCarta, ""));
    } else {
        localStorage.setItem("deck", localStorage.getItem("deck").replace(deck[0].getIdCarta +",", ""));
    }
    deck.splice(0, 1);
    document.location.reload(true);
    console.log("Você não possui esta carta no deck!");
}

carregarDeck();