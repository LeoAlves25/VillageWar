function abrirHtmlJogar(){
    if(jogando == true) {
        alert("Você está no meio de um jogo! Termine-o ou recarregue a página.");
    }
    else {
        window.open("index.html","_self");
    }
}

function abrirHtmlMinhasCartas(){
    if(jogando == true) {
        alert("Você está no meio de um jogo! Termine-o ou recarregue a página.");
    }
    else {
        window.open("minhasCartas.html","_self");
    }
}

function abrirHtmlComprarCartas(){
    if(jogando == true) {
        alert("Você está no meio de um jogo! Termine-o ou recarregue a página.");
    }
    else {
        window.open("comprarCartas.html","_self");
    }
}