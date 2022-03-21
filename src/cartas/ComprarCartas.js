function bauAberto(){
    document.getElementById("bau").src = "imgs/chest_open.png"
    setTimeout(gerarCartas, 100);
    setTimeout(bauFechado, 4000);
}

function bauFechado(){
    document.getElementById("bau").src = "imgs/chest.png"
    document.getElementById("cartaComprada1").style.boxShadow = "none"; 
    document.getElementById("cartaComprada2").style.boxShadow = "none"; 
    document.getElementById("cartaComprada3").style.boxShadow = "none"; 
    document.getElementById("cartaComprada1").src = "imgs/indefinido.png";
    document.getElementById("cartaComprada2").src = "imgs/indefinido.png";
    document.getElementById("cartaComprada3").src = "imgs/indefinido.png";
}

function gerarCartas(){
    let carta1, carta2, carta3;
    var nome,raridade,imagem;

    nome = gerarNome();
    raridade = gerarRaridade();
    imagem = gerarImagemPersonagem(nome, raridade);
    carta1 = new Carta(nome, raridade, imagem);

    nome = gerarNome();
    raridade = gerarRaridade();
    imagem = gerarImagemPersonagem(nome, raridade);
    carta2 = new Carta(nome, raridade, imagem);

    nome = gerarNome();
    raridade = gerarRaridade();
    imagem = gerarImagemPersonagem(nome, raridade);
    carta3 = new Carta(nome, raridade, imagem);

    function brilhoAoConseguirCartasRaras(){
        if(carta1.getRaridade == "Raro"){
                document.getElementById("cartaComprada1").style.boxShadow = "0 4px 8px #42c5f5"; 
        } else if(carta1.getRaridade == "Lendario"){
                document.getElementById("cartaComprada1").style.boxShadow = "0 4px 8px #ff990a"; 
        } else if(carta1.getRaridade == "Mitico"){
                document.getElementById("cartaComprada1").style.boxShadow = "0 4px 8px #ff0537"; 
        }
        if(carta2.getRaridade == "Raro"){
                document.getElementById("cartaComprada2").style.boxShadow = "0 4px 8px #42c5f5"; 
        } else if(carta2.getRaridade == "Lendario"){
                document.getElementById("cartaComprada2").style.boxShadow = "0 4px 8px #ff990a"; 
        } else if(carta2.getRaridade == "Mitico"){
                document.getElementById("cartaComprada2").style.boxShadow = "0 4px 8px #ff0537"; 
        }
        if(carta3.getRaridade == "Raro"){
                document.getElementById("cartaComprada3").style.boxShadow = "0 4px 8px #42c5f5"; 
        } else if(carta3.getRaridade == "Lendario"){
                document.getElementById("cartaComprada3").style.boxShadow = "0 4px 8px #ff990a"; 
        } else if(carta3.getRaridade == "Mitico"){
                document.getElementById("cartaComprada3").style.boxShadow = "0 4px 8px #ff0537"; 
        }
    }

    setTimeout(() => {document.getElementById("cartaComprada1").src = carta1.getImgCarta}, 200);
    setTimeout(() => {document.getElementById("cartaComprada2").src = carta2.getImgCarta}, 400);
    setTimeout(() => {document.getElementById("cartaComprada3").src = carta3.getImgCarta}, 600);
    brilhoAoConseguirCartasRaras();


    localStorage.setItem("cartasNome", localStorage.getItem("cartasNome") + carta1.getNome +"_" + carta2.getNome +"_" + carta3.getNome +"_");
    localStorage.setItem("cartasRaridade", localStorage.getItem("cartasRaridade") + carta1.getRaridade +"_" + carta2.getRaridade +"_" + carta3.getRaridade +"_");
    localStorage.setItem("cartasImagens", localStorage.getItem("cartasImagens") + carta1.getImgCarta +"*" + carta2.getImgCarta +"*" + carta3.getImgCarta +"*");

    console.log(carta1);
    console.log(carta2);
    console.log(carta3);
}

function gerarRaridade(){
    let raridade, numAleatorio;
    numAleatorio = Math.random();

    if(numAleatorio >= 28/100 && numAleatorio <= 72/100 || numAleatorio > 72/100){
        raridade = "Comum"; // 72% de chance
    } else if(numAleatorio >= 8/100 && numAleatorio <= 28/100){
        raridade = "Raro"; // 20% de chance
    } else if(numAleatorio >= 1/100 && numAleatorio <= 8/100){
        raridade = "Lendario"; // 7% de chance
    } else if(numAleatorio < 1/100){
        raridade = "Mitico"; // 1% de chance
    }
    return raridade;
}

function gerarNome(){
    function gerarNomesComuns(){
        let nomeComum, index;
        index = inteiroAleatorio(0,nomeDasCartasComuns.length - 1);
        nomeComum = nomeDasCartasComuns[index];
        return nomeComum;
    }

    function gerarNomesRaros(){
        let nomeRaro, index;
        index = inteiroAleatorio(0,nomeDasCartasRaras.length - 1);
        nomeRaro = nomeDasCartasRaras[index];
        return nomeRaro;
    }

    function gerarNomesLendarios(){
        let nomeLendario, index;
        index = inteiroAleatorio(0,nomesDasCartasLendarias.length - 1);
        nomeLendario = nomesDasCartasLendarias[index];
        return nomeLendario;
    }

    let nomePersonagem;
    if(gerarRaridade() == "Comum"){
        nomePersonagem = gerarNomesComuns();
    } else if(gerarRaridade() == "Raro"){
        nomePersonagem = gerarNomesRaros();
    } else if(gerarRaridade() == "Lendario"){
        nomePersonagem = gerarNomesLendarios();
    } else if(gerarRaridade() == "Mitico"){
        nomePersonagem = "Noel"; // 100% de chance de vir NOEL;
    } else {
        nomePersonagem = gerarNomesRaros();
    }
    return nomePersonagem;
}

function gerarImagemPersonagem(nomef, raridadef){
    let imgPersonagem, nome, raridade;
    nome = nomef;
    raridade = raridadef;
    if(raridade == "Comum"){
        switch(nome){
            case "Ferreiro":
                    imgPersonagem = "imgs/Ferreiro_comum.png";
            break;

            case "Estalajadeiro":
                    imgPersonagem = "imgs/Estalajadeiro_comum.png";
            break;

            case "Cavaleiro":
                    imgPersonagem = "imgs/Cavaleiro_comum.png";
            break;

            case "Gladiador":
                    imgPersonagem = "imgs/Gladiador_comum.png";
            break;

            case "Mago":
                    imgPersonagem = "imgs/Mago_comum.png";
            break;

            case "Medico Da Peste":
                    imgPersonagem = "imgs/MedicoDaPeste_comum.png";
            break;

            case "Ninja":
                    imgPersonagem = "imgs/Ninja_comum.png";
            break;
        }
    } else if(raridade == "Raro"){
        switch(nome){
            case "Ferreiro":
                    imgPersonagem = "imgs/Ferreiro_raro.png";
            break;

            case "Estalajadeiro":
                    imgPersonagem = "imgs/Estalajadeiro_raro.png";
            break;

            case "Cavaleiro":
                    imgPersonagem = "imgs/Cavaleiro_raro.png";
            break;

            case "Gladiador":
                    imgPersonagem = "imgs/Gladiador_raro.png";
            break;

            case "Mago":
                    imgPersonagem = "imgs/Mago_raro.png";
            break;

            case "Medico Da Peste":
                    imgPersonagem = "imgs/MedicoDaPeste_raro.png";
            break;

            case "Ninja":
                    imgPersonagem = "imgs/Ninja_raro.png";
            break;
        }
    } else if(raridade == "Lendario"){
        switch(nome){
            case "Ferreiro":
                    imgPersonagem = "imgs/Ferreiro_lendario.png";
            break;

            case "Estalajadeiro":
                    imgPersonagem = "imgs/Estalajadeiro_lendario.png";
            break;

            case "Cavaleiro":
                    imgPersonagem = "imgs/Cavaleiro_lendario.png";
            break;

            case "Gladiador":
                    imgPersonagem = "imgs/Gladiador_lendario.png";
            break;

            case "Mago":
                    imgPersonagem = "imgs/Mago_lendario.png";
            break;

            case "Medico Da Peste":
                    imgPersonagem = "imgs/MedicoDaPeste_lendario.png";
            break;

            case "Ninja":
                    imgPersonagem = "imgs/Ninja_lendario.png";
            break;

            case "Principe":
                    imgPersonagem = "imgs/Principe_lendario.png";
            break;

            case "Rei":
                    imgPersonagem = "imgs/Rei_lendario.png";
            break;
        }
    } else if(raridade == "Mitico"){
        imgPersonagem = "imgs/Noel_mitico.png"; // 100% de chance de vir NOEL;
    } else {
        switch(nome){
            case "Ferreiro":
                    imgPersonagem = "imgs/Ferreiro_raro.png";
            break;

            case "Estalajadeiro":
                    imgPersonagem = "imgs/Estalajadeiro_raro.png";
            break;

            case "Cavaleiro":
                    imgPersonagem = "imgs/Cavaleiro_raro.png";
            break;

            case "Gladiador":
                    imgPersonagem = "imgs/Gladiador_raro.png";
            break;

            case "Mago":
                    imgPersonagem = "imgs/Mago_raro.png";
            break;

            case "Medico Da Peste":
                    imgPersonagem = "imgs/MedicoDaPeste_raro.png";
            break;

            case "Ninja":
                    imgPersonagem = "imgs/Ninja_raro.png";
            break;
        }
    }

    return imgPersonagem;
}

function inteiroAleatorio(min, max){
    return Math.round(Math.random() * (max - min));
}