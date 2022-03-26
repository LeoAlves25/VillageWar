var raridadeFinal;

function bauAberto(){
    document.getElementById("bau").src = "imgs/chest_open.png"
    document.getElementById("bau").disabled = true; 
    setTimeout(gerarCartas, 100);
    setTimeout(bauFechado, 2000);
}

function bauFechado(){
    document.getElementById("bau").disabled = false;    
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
    let nome,raridade,imagem,idCarta;
    let forca,defesa,magia,hp, passiva;

    nome = gerarNome();
    raridade = raridadeFinal;
    imagem = gerarImagemPersonagem(nome, raridade);
    idCarta = gerarIdCarta(raridade);
    forca = gerarForca(0, 50);
    defesa = gerarDefesa(0, 50);
    magia = gerarMagia(0, 50);
    hp = gerarHp(50, 300);
    passiva = "Teste Teste";
    carta1 = new CartaComprada(nome, raridade, imagem, idCarta, forca, defesa, magia, hp, passiva);
    minhasCartasCompradas.push(carta1.getIdCarta);

    nome = gerarNome();
    raridade = raridadeFinal;
    imagem = gerarImagemPersonagem(nome, raridade);
    idCarta = gerarIdCarta(raridade);
    forca = gerarForca(0, 50);
    defesa = gerarDefesa(0, 50);
    magia = gerarMagia(0, 50);
    hp = gerarHp(50, 300);
    passiva = "Teste Teste";
    carta2 = new CartaComprada(nome, raridade, imagem, idCarta, forca, defesa, magia, hp, passiva);
    minhasCartasCompradas.push(carta2.getIdCarta);

    nome = gerarNome();
    raridade = raridadeFinal;
    imagem = gerarImagemPersonagem(nome, raridade);
    idCarta = gerarIdCarta(raridade);
    forca = gerarForca(0, 50);
    defesa = gerarDefesa(0, 50);
    magia = gerarMagia(0, 50);
    hp = gerarHp(50, 300);
    passiva = "Teste Teste";
    carta3 = new CartaComprada(nome, raridade, imagem, idCarta, forca, defesa, magia, hp, passiva);
    minhasCartasCompradas.push(carta3.getIdCarta);

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
    localStorage.setItem("cartasIds", localStorage.getItem("cartasIds") + carta1.getIdCarta +"*" + carta2.getIdCarta +"*" + carta3.getIdCarta +"*");
    localStorage.setItem("cartasForcas", localStorage.getItem("cartasForcas") + carta1.getForca +"_" + carta2.getForca +"_" + carta3.getForca +"_");
    localStorage.setItem("cartasDesefas", localStorage.getItem("cartasDesefas") + carta1.getDefesa +"_" + carta2.getDefesa +"_" + carta3.getDefesa +"_");
    localStorage.setItem("cartasMagias", localStorage.getItem("cartasMagias") + carta1.getMagia +"_" + carta2.getMagia +"_" + carta3.getMagia +"_");
    localStorage.setItem("cartasHps", localStorage.getItem("cartasHps") + carta1.getHp +"_" + carta2.getHp +"_" + carta3.getHp +"_");
    localStorage.setItem("cartasPassiva", localStorage.getItem("cartasPassiva") + carta1.getPassiva +"_" + carta2.getPassiva +"_" + carta3.getPassiva +"_");

    console.log(carta1);
    console.log(carta2);
    console.log(carta3);
}

function gerarRaridade(){
    var numAleatorio,raridade;
    numAleatorio = Math.random();

    if(numAleatorio >= 28/100 && numAleatorio < 100/100){
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

    function gerarNomesMiticos(){
        let nomeMitico, index;
        index = inteiroAleatorio(0,nomeDasCartasMiticas.length - 1);
        nomeMitico = nomeDasCartasMiticas[index];
        return nomeMitico;
    }

    let nomePersonagem;
    raridadeFinal = gerarRaridade();
    if(raridadeFinal == "Comum"){
        nomePersonagem = gerarNomesComuns();
    } else if(raridadeFinal == "Raro"){
        nomePersonagem = gerarNomesRaros();
    } else if(raridadeFinal == "Lendario"){
        nomePersonagem = gerarNomesLendarios();
    } else if(raridadeFinal == "Mitico"){
        nomePersonagem = gerarNomesMiticos();
    } else {
        nomePersonagem = gerarNomesRaros();
    }
    return nomePersonagem;
}

/* Debug de testar cartas
for(var contador = 0; contador < 500; ++contador){
        nome = gerarNome();
        var raridadeF;
        if(nome == "Rei" || nome == "Principe"){
                raridadeF = "Lendario"
        }
        var carta = gerarImagemPersonagem(nome, raridade);
        if(nome == "Rei"){
                console.log("Rei");
                break;
       } else if(nome == "Principe"){
                console.log("Principe");
                break;
        } else if(contador == 499){
                console.log("Error");
       }
}
*/

function gerarImagemPersonagem(nomef, raridadef){
    let imgPersonagem, nome, raridade;
    nome = nomef;
    raridade = raridadef;
    switch(raridade){
            case "Comum":
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
            break;
            case "Raro":
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
            break;
            case "Lendario":
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
            break;
            case "Mitico":
                switch(nome){
                        case "Noel":
                                imgPersonagem = "imgs/Noel_mitico.png";
                        break;

                        case "PauloCirillo":
                                imgPersonagem = "imgs/PauloCirillo_mitico.png";
                        break;
                }
            break;  
    }
    return imgPersonagem;
}

function gerarIdCarta(raridadef){
        let numeracao, raridade;
        numeracao = minhasCartasCompradas.length + 1;
        if(raridadef == "Comum"){
                raridade = "C";
        } else if(raridadef == "Raro"){
                raridade = "R";
        } else if(raridadef == "Lendario"){
                raridade = "L";
        } else if(raridadef == "Mitico"){
                raridade = "M";
        }
        return ((numeracao.toString()).padStart(6, "0") + raridade);
}

/*
* Atributos das cartas
*/

function gerarForca(min, max){
        return inteiroAleatorio(min, max);
}

function gerarDefesa(min, max){
        return inteiroAleatorio(min, max);
}

function gerarMagia(min, max){
        return inteiroAleatorio(min, max);
}

function gerarHp(min, max){
        return inteiroAleatorio(min, max);
}

function inteiroAleatorio(min, max){
        return Math.round(Math.random() * (max - min));
}