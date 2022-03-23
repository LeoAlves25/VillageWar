/*
*   Minhas cartas compradas
*/

let minhasCartasCompradas = []; //Para gerar cartas Ids // Quando dar refresh na pagina irá perder o valor
// Solucionado ao igualar ao array minhasCartasIds já que um depende do outro.

/*
*   Minhas cartas
*/

let minhasCartas = []; //Cada carta do inventário como objeto // Vazio!

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
* Cartas sub-divididas pelos Ids
*/

let minhasCartasIds = localStorage.getItem("cartasIds").split("*");
minhasCartasIds.pop();
minhasCartasCompradas = minhasCartasIds;
console.log(minhasCartasIds);

/*
* Funções essênciais da Classe!
*/

mandarCartasCompradasParaMinhaBag();
carregarMinhasCartas();

/*
* Cartas sub-divididas em raridade OBJs
*/
let minhasCartasComunsObj = minhasCartas.filter(function(carta){ return carta.raridade == "Comum"});
console.log(minhasCartasComunsObj);

let minhasCartasRarosObj = minhasCartas.filter(function(carta){ return carta.raridade == "Raro"});
console.log(minhasCartasRarosObj);

let minhasCartasLendariosObj = minhasCartas.filter(function(carta){ return carta.raridade == "Lendario"});
console.log(minhasCartasLendariosObj);

let minhasCartasMiticosObj = minhasCartas.filter(function(carta){ return carta.raridade == "Mitico"});
console.log(minhasCartasMiticosObj);

console.log(minhasCartas);

/*
*   Transformas as cartas em Objetos / carregar cartas
*/

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

function mandarCartasCompradasParaMinhaBag(){
    for(var contador = 0; contador < minhasCartasIds.length; ++contador){
        criarMinhasCartasObjeto(minhasCartasNomes[contador], minhasCartasRaridades[contador],
            minhasCartasImagens[contador], 1, minhasCartasIds[contador]);
    }
}
function criarMinhasCartasObjeto(nome, raridade, imgCarta, lvl, idCarta){
        var carta = new Carta(nome,raridade,imgCarta,lvl,idCarta);
        minhasCartas.push(carta);
}

/*
* Funções para cartas Comuns!
*/

function carregarCartasPelaRaridadeComum(){
    for(var contador = 0; contador < minhasCartasComunsImgs.length; ++contador){
        criarLieImgsCartasComuns(contador, contador);
    }
    abrirStatusCartasComuns();
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
    criarImg.setAttribute("class", "cartaComum");
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
    abrirStatusCartasRaras();
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
    criarLi.setAttribute("id","liRaro");
    criarImg.setAttribute("class", "cartaRara");
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
    abrirStatusCartasLendarias();
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
    criarImg.setAttribute("class", "cartaLendaria");
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
    abrirStatusCartasMiticas();
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
    criarImg.setAttribute("class", "cartaMitica");
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
    abrirStatusCartasTodas();
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
    criarImg.setAttribute("class", "carta");
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

/*
* Status comum
*/

function statusCartasComuns(num){
    document.getElementById("level").innerHTML = "Level: 0"+minhasCartasComunsObj[num].getLvl;
    document.getElementById("idCarta").innerHTML = "#"+minhasCartasComunsObj[num].getIdCarta;
    document.getElementById("imgCarta").src = minhasCartasComunsObj[num].getImgCarta;
}

function carregarStatusCartasComuns(num){
    var carta = "cartaComum"+num;
    var $id = document.getElementById(carta);
    if($id == null)
        return;
    document.getElementById(carta).addEventListener("click", () => {
        document.getElementById("deck").style.marginRight = "30%";
        $infoCartas.display = "block";
        statusCartasComuns(num);
    });
}

function abrirStatusCartasComuns(){
    for(var contador = 0; contador < minhasCartasComunsObj.length; ++contador){
        carregarStatusCartasComuns(contador);
    }
}

/*
* Status raro
*/

function statusCartasRaras(num){
    document.getElementById("level").innerHTML = "Level: 0"+minhasCartasRarosObj[num].getLvl;
    document.getElementById("idCarta").innerHTML = "#"+minhasCartasRarosObj[num].getIdCarta;
    document.getElementById("imgCarta").src = minhasCartasRarosObj[num].getImgCarta;
}

function carregarStatusCartasRaras(num){
    var carta = "cartaRara"+num;
    var $id = document.getElementById(carta);
    if($id == null)
        return;
    document.getElementById(carta).addEventListener("click", () => {
        document.getElementById("deck").style.marginRight = "30%";
        $infoCartas.display = "block";
        statusCartasRaras(num);
    });
}

function abrirStatusCartasRaras(){
    for(var contador = 0; contador < minhasCartasRarosObj.length; ++contador){
        carregarStatusCartasRaras(contador);
    }
}

/*
* Status lendario
*/

function statusCartasLendarias(num){
    document.getElementById("level").innerHTML = "Level: 0"+minhasCartasLendariosObj[num].getLvl;
    document.getElementById("idCarta").innerHTML = "#"+minhasCartasLendariosObj[num].getIdCarta;
    document.getElementById("imgCarta").src = minhasCartasLendariosObj[num].getImgCarta;
}

function carregarStatusCartasLendarias(num){
    var carta = "cartaLendaria"+num;
    var $id = document.getElementById(carta);
    if($id == null)
        return;
    document.getElementById(carta).addEventListener("click", () => {
        document.getElementById("deck").style.marginRight = "30%";
        $infoCartas.display = "block";
        statusCartasLendarias(num);
    });
}

function abrirStatusCartasLendarias(){
    for(var contador = 0; contador < minhasCartasLendariosObj.length; ++contador){
        carregarStatusCartasLendarias(contador);
    }
}

/*
* Status mitico
*/

function statusCartasMiticas(num){
    document.getElementById("level").innerHTML = "Level: 0"+minhasCartasMiticosObj[num].getLvl;
    document.getElementById("idCarta").innerHTML = "#"+minhasCartasMiticosObj[num].getIdCarta;
    document.getElementById("imgCarta").src = minhasCartasMiticosObj[num].getImgCarta;
}

function carregarStatusCartasMiticas(num){
    var carta = "cartaMitica"+num;
    var $id = document.getElementById(carta);
    if($id == null)
        return;
    document.getElementById(carta).addEventListener("click", () => {
        document.getElementById("deck").style.marginRight = "30%";
        $infoCartas.display = "block";
        statusCartasMiticas(num);
    });
}

function abrirStatusCartasMiticas(){
    for(var contador = 0; contador < minhasCartasMiticosObj.length; ++contador){
        carregarStatusCartasMiticas(contador);
    }
}

/*
* Status todas
*/

function statusCartasTodas(num){
    document.getElementById("level").innerHTML = "Level: 0"+minhasCartas[num].getLvl;
    document.getElementById("idCarta").innerHTML = "#"+minhasCartas[num].getIdCarta;
    document.getElementById("imgCarta").src = minhasCartas[num].getImgCarta;
}

function carregarStatusCartasTodas(num){
    var carta = "carta"+num;
    var $id = document.getElementById(carta);
    if($id == null)
        return;
    $id.addEventListener("click", () => {
        document.getElementById("deck").style.marginRight = "30%";
        $infoCartas.display = "block";
        statusCartasTodas(num);
    });
}

function abrirStatusCartasTodas(){
    for(var contador = 0; contador < minhasCartas.length; ++contador){
        carregarStatusCartasTodas(contador);
    }
}

/*
*  Esconder info cartas
*/

const $infoCartas = document.getElementById("infoCartas").style;
$infoCartas.display = "none";

document.getElementById("botaoFechar").addEventListener("click",() => {
    document.getElementById("deck").style.marginRight = "0";
    $infoCartas.display = "none";
});
