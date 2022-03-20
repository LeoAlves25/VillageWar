function bauAberto(){
    document.getElementById("bau").src = "Imagens/chest_open.png"
    setTimeout(bauFechado, 3000);
}

function bauFechado(){
    document.getElementById("bau").src = "Imagens/chest.png"
}