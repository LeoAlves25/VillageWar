/*
* Cartas sub-divididas pelos nomes
*/

let minhasCartasNomes = localStorage.getItem("cartasNome").split("_");
minhasCartasNomes.pop();
console.log(minhasCartasNomes);

/*
* Cartas sub-divididas pelas raridades
*/

let minhasCartasRaridades = localStorage.getItem("cartasRaridade").split("_");
minhasCartasRaridades.pop();
console.log(minhasCartasRaridades);

let minhasCartasComuns = minhasCartasRaridades.filter(raridade => raridade == "Comum");
let minhasCartasRaros = minhasCartasRaridades.filter(raridade => raridade == "Raro");
let minhasCartasLendarios = minhasCartasRaridades.filter(raridade => raridade == "Lendario");
let minhasCartasMiticos = minhasCartasRaridades.filter(raridade => raridade == "Mitico");

/*
* Cartas sub-divididas pelas raridades e imagens
*/

let minhasCartasImagens = localStorage.getItem("cartasImagens").split("*");
minhasCartasImagens.pop();
console.log(minhasCartasImagens);

let minhasCartasComunsImgs = minhasCartasImagens.filter(personagem => 
    personagem == "imgs/Gladiador_comum.png" || personagem == "imgs/Cavaleiro_comum.png"
    || personagem == "imgs/Estalajadeiro_comum.png" || personagem == "imgs/Ferreiro_comum.png"
    || personagem == "imgs/Mago_comum.png" || personagem == "imgs/MedicoDaPeste_comum.png"
    || personagem == "imgs/Ninja_comum.png");
console.log(minhasCartasComunsImgs);

let minhasCartasRarasImgs = minhasCartasImagens.filter(personagem => 
    personagem == "imgs/Gladiador_raro.png" || personagem == "imgs/Cavaleiro_raro.png"
    || personagem == "imgs/Estalajadeiro_raro.png" || personagem == "imgs/Ferreiro_raro.png"
    || personagem == "imgs/Mago_raro.png" || personagem == "imgs/MedicoDaPeste_raro.png"
    || personagem == "imgs/Ninja_raro.png");
console.log(minhasCartasRarasImgs);

let minhasCartasLendariasImgs = minhasCartasImagens.filter(personagem => 
    personagem == "imgs/Gladiador_lendario.png" || personagem == "imgs/Cavaleiro_lendario.png"
    || personagem == "imgs/Estalajadeiro_lendario.png" || personagem == "imgs/Ferreiro_lendario.png"
    || personagem == "imgs/Mago_lendario.png" || personagem == "imgs/MedicoDaPeste_lendario.png"
    || personagem == "imgs/Ninja_lendario.png" || personagem == "imgs/Principe_lendario.png"
    || personagem == "imgs/Rei_lendario.png");
console.log(minhasCartasLendariasImgs);

let minhasCartasMiticasImgs = minhasCartasImagens.filter(personagem => 
    personagem == "imgs/Noel_mitico.png");
console.log(minhasCartasMiticasImgs);

/*
* Funções!
*/

carregarMinhasCartas();

function carregarMinhasCartas(){
    if(minhasCartasImagens.length == 0) 
        return; 
    carregarTodasCartas();
    document.getElementById("butaoTudo").addEventListener("click", () => carregarTodasCartas());
    document.getElementById("butaoComum").addEventListener("click", () => carregarCartasPelaRaridadeComum());
    document.getElementById("butaoRaro").addEventListener("click", () => carregarCartasPelaRaridadeRara());
    document.getElementById("butaoLendario").addEventListener("click", () => carregarCartasPelaRaridadeLendarias());
    document.getElementById("butaoMitico").addEventListener("click", () => carregarCartasPelaRaridadeMiticas());
}

/*
* Funções para cartas Comuns!
*/

function carregarCartasPelaRaridadeComum(){
    for(var contador = 0; contador < minhasCartasComunsImgs.length; ++contador){
        criarLieImgsCartasComuns(contador, contador);
    }
    document.getElementById("butaoTudo").disabled = false;
    document.getElementById("butaoComum").disabled = true;
    document.getElementById("butaoRaro").disabled = false;
    document.getElementById("butaoLendario").disabled = false;
    document.getElementById("butaoMitico").disabled = false;
    removerLieImgsCartasTodas("Comum");
}

function criarLieImgsCartasComuns(imagem, id){
    const listaCartas = document.getElementById("listaCartas");
    var criarLi = document.createElement("li");
    var criarImg = document.createElement("img");
    criarLi.setAttribute("id","liComum")
    var idAtributo = "cartaComum";
    criarImg.setAttribute("id",idAtributo + id);
    if(listaCartas == null)
        return;
    criarImg.setAttribute("src", minhasCartasComunsImgs[imagem]);
    listaCartas.appendChild(criarLi).appendChild(criarImg);
}

function removerLieImgsCartasComuns(id){
    var ulLista = document.getElementById("listaCartas");
    var liLista = document.getElementById("liComum");
    var cartaComum = "cartaComum"+id
    var removerCartas = document.getElementById(cartaComum);
    if(ulLista == null || liLista == null || removerCartas == null)
        return; 
    ulLista.removeChild(liLista).removeChild(removerCartas);
}

/*
* Funções para cartas Raras!
*/

function carregarCartasPelaRaridadeRara(){
    for(var contador = 0; contador < minhasCartasRarasImgs.length; ++contador){
        criarLieImgsCartasRaras(contador, contador);
    }
    document.getElementById("butaoTudo").disabled = false;
    document.getElementById("butaoComum").disabled = false;
    document.getElementById("butaoRaro").disabled = true;
    document.getElementById("butaoLendario").disabled = false;
    document.getElementById("butaoMitico").disabled = false;
    removerLieImgsCartasTodas("Raro");
}

function criarLieImgsCartasRaras(imagem, id){
    const listaCartas = document.getElementById("listaCartas");
    var criarLi = document.createElement("li");
    var criarImg = document.createElement("img");
    criarLi.setAttribute("id","liRaro")
    var idAtributo = "cartaRara";
    criarImg.setAttribute("id",idAtributo + id);
    if(listaCartas == null)
        return;
    criarImg.setAttribute("src", minhasCartasRarasImgs[imagem]);
    listaCartas.appendChild(criarLi).appendChild(criarImg);
}

function removerLieImgsCartasRaras(id){
    var ulLista = document.getElementById("listaCartas");
    var liLista = document.getElementById("liRaro");
    var cartaRara = "cartaRara"+id
    var removerCartas = document.getElementById(cartaRara);
    if(ulLista == null || liLista == null || removerCartas == null)
        return; 
    ulLista.removeChild(liLista).removeChild(removerCartas);
}

/*
* Funções para cartas Lendarias!
*/

function carregarCartasPelaRaridadeLendarias(){
    for(var contador = 0; contador < minhasCartasLendariasImgs.length; ++contador){
        criarLieImgsCartasLendarias(contador, contador);
    }
    document.getElementById("butaoTudo").disabled = false;
    document.getElementById("butaoComum").disabled = false;
    document.getElementById("butaoRaro").disabled = false;
    document.getElementById("butaoLendario").disabled = true;
    document.getElementById("butaoMitico").disabled = false;
    removerLieImgsCartasTodas("Lendario");
}

function criarLieImgsCartasLendarias(imagem, id){
    var listaCartas = document.getElementById("listaCartas");
    var criarLi = document.createElement("li");
    var criarImg = document.createElement("img");
    var idAtributo = "cartaLendaria";
    criarLi.setAttribute("id","liLendario")
    criarImg.setAttribute("id",idAtributo + id);
    if(listaCartas == null)
        return;
    criarImg.setAttribute("src", minhasCartasLendariasImgs[imagem]);
    listaCartas.appendChild(criarLi).appendChild(criarImg);
}

function removerLieImgsCartasLendarias(id){
    var ulLista = document.getElementById("listaCartas");
    var liLista = document.getElementById("liLendario");
    var cartaLendaria = "cartaLendaria"+id
    var removerCartas = document.getElementById(cartaLendaria);
    if(ulLista == null || liLista == null || removerCartas == null)
        return; 
    ulLista.removeChild(liLista).removeChild(removerCartas);
}

/*
* Funções para cartas Miticas!
*/

function carregarCartasPelaRaridadeMiticas(){
    for(var contador = 0; contador < minhasCartasMiticasImgs.length; ++contador){
        criarLieImgsCartasMiticas(contador, contador);
    }
    document.getElementById("butaoTudo").disabled = false;
    document.getElementById("butaoComum").disabled = false;
    document.getElementById("butaoRaro").disabled = false;
    document.getElementById("butaoLendario").disabled = false;
    document.getElementById("butaoMitico").disabled = true;
    removerLieImgsCartasTodas("Mitico");
}

function criarLieImgsCartasMiticas(imagem, id){
    const listaCartas = document.getElementById("listaCartas");
    var criarLi = document.createElement("li");
    var criarImg = document.createElement("img");
    criarLi.setAttribute("id","liMitica")
    var idAtributo = "cartaMitica";
    criarImg.setAttribute("id",idAtributo + id);
    if(listaCartas == null)
        return;
    criarImg.setAttribute("src", minhasCartasMiticasImgs[imagem]);
    listaCartas.appendChild(criarLi).appendChild(criarImg);
}

function removerLieImgsCartasMiticas(id){
    var ulLista = document.getElementById("listaCartas");
    var liLista = document.getElementById("liMitica");
    var cartaMitica = "cartaMitica"+id
    var removerCartas = document.getElementById(cartaMitica);
    if(ulLista == null || liLista == null || removerCartas == null)
        return; 
    ulLista.removeChild(liLista).removeChild(removerCartas);
}

/*
* Funções para todas as cartas!
*/

function carregarTodasCartas(){
    for(var contador = 0; contador < minhasCartasImagens.length; ++contador){
        criarLieImgsTodos(contador,contador);
    }
    document.getElementById("butaoTudo").disabled = true;
    document.getElementById("butaoComum").disabled = false;
    document.getElementById("butaoRaro").disabled = false;
    document.getElementById("butaoLendario").disabled = false;
    document.getElementById("butaoMitico").disabled = false;
    removerLieImgsCartasTodas("Todas");
}

function criarLieImgsTodos(imagem, id){
    const listaCartas = document.getElementById("listaCartas");
    var criarLi = document.createElement("li");
    var criarImg = document.createElement("img");
    criarLi.setAttribute("id","liTodas")
    var idAtributo = "carta";
    criarImg.setAttribute("id",idAtributo + id);
    if(listaCartas == null)
        return;
    criarImg.setAttribute("src", minhasCartasImagens[imagem]);
    listaCartas.appendChild(criarLi).appendChild(criarImg);
}

function removerLieImgsTodasCartas(id){
    var ulLista = document.getElementById("listaCartas");
    var liLista = document.getElementById("liTodas");
    var carta = "carta"+id
    var removerCartas = document.getElementById(carta);
    if(ulLista == null || liLista == null || removerCartas == null)
        return; 
    ulLista.removeChild(liLista).removeChild(removerCartas);
}

function removerLieImgsCartasTodas(raridade){
    switch(raridade){
        case "Comum":
            for(var contador = 0; contador < minhasCartasRarasImgs.length; ++contador){
                removerLieImgsCartasRaras(contador);
            }
            for(var contador = 0; contador < minhasCartasLendariasImgs.length; ++contador){
                removerLieImgsCartasLendarias(contador);
            }
            for(var contador = 0; contador < minhasCartasMiticasImgs.length; ++contador){
                removerLieImgsCartasMiticas(contador);
            }
            for(var contador = 0; contador < minhasCartasImagens.length; ++contador){
                removerLieImgsTodasCartas(contador);
            }
        break;
        case "Raro":
            for(var contador = 0; contador < minhasCartasComunsImgs.length; ++contador){
                removerLieImgsCartasComuns(contador);
            }
            for(var contador = 0; contador < minhasCartasLendariasImgs.length; ++contador){
                removerLieImgsCartasLendarias(contador);
            }
            for(var contador = 0; contador < minhasCartasMiticasImgs.length; ++contador){
                removerLieImgsCartasMiticas(contador);
            }
            for(var contador = 0; contador < minhasCartasImagens.length; ++contador){
                removerLieImgsTodasCartas(contador);
            }
        break;
        case "Lendario":
            for(var contador = 0; contador < minhasCartasComunsImgs.length; ++contador){
                removerLieImgsCartasComuns(contador);
            }
            for(var contador = 0; contador < minhasCartasRarasImgs.length; ++contador){
                removerLieImgsCartasRaras(contador);
            }
            for(var contador = 0; contador < minhasCartasMiticasImgs.length; ++contador){
                removerLieImgsCartasMiticas(contador);
            }
            for(var contador = 0; contador < minhasCartasImagens.length; ++contador){
                removerLieImgsTodasCartas(contador);
            }
        break;
        case "Mitico":
            for(var contador = 0; contador < minhasCartasComunsImgs.length; ++contador){
                removerLieImgsCartasComuns(contador);
            }
            for(var contador = 0; contador < minhasCartasRarasImgs.length; ++contador){
                removerLieImgsCartasRaras(contador);
            }
            for(var contador = 0; contador < minhasCartasLendariasImgs.length; ++contador){
                removerLieImgsCartasLendarias(contador);
            }
            for(var contador = 0; contador < minhasCartasImagens.length; ++contador){
                removerLieImgsTodasCartas(contador);
            }
        break;
        default:
            for(var contador = 0; contador < minhasCartasComunsImgs.length; ++contador){
                removerLieImgsCartasComuns(contador);
            }
            for(var contador = 0; contador < minhasCartasRarasImgs.length; ++contador){
                removerLieImgsCartasRaras(contador);
            }
            for(var contador = 0; contador < minhasCartasLendariasImgs.length; ++contador){
                removerLieImgsCartasLendarias(contador);
            }
            for(var contador = 0; contador < minhasCartasMiticasImgs.length; ++contador){
                removerLieImgsCartasMiticas(contador);
            }
    }
}