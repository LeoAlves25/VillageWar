let raridade;
let nome;
let imgCarta;
let lvl;
let idCarta;

let nomeDasCartasComuns = 
    ["Ferreiro", "Estalajadeiro","Cavaleiro", "Gladiador",
     "Mago", "Medico Da Peste", "Ninja"];  

let nomeDasCartasRaras = 
    ["Ferreiro", "Estalajadeiro","Cavaleiro", "Gladiador",
     "Mago", "Medico Da Peste", "Ninja"];     

let nomesDasCartasLendarias = 
    ["Ferreiro", "Estalajadeiro","Cavaleiro", "Gladiador",
     "Mago", "Medico Da Peste", "Ninja", "Principe",
     "Rei"];
     
let nomeDasCartasMiticas = ["Noel"];

let raridadeDasCartas = ["Comum", "Raro","Lendario", "Mitico"];

//Hp raridade// Comum: 50~~200 / Raro: 50~~200 / Lendario: 80~~250 / Mitico: 150 ~~ 300


class Carta {
    constructor(nome, raridade, imgCarta, lvl, idCarta) {
        this.nome = nome;
        this.raridade = raridade;
        this.imgCarta = imgCarta;
        this.lvl = lvl;
        this.idCarta = idCarta;
    }

    get getNome(){
        return this.nome;
    }

    get getRaridade(){
        return this.raridade;
    }

    get getImgCarta(){
        return this.imgCarta;
    }

    get getLvl(){
        return this.lvl;
    }

    get getIdCarta(){
        return this.idCarta;
    }
}

class CartaComprada {
    constructor(nome, raridade, imgCarta, idCarta) {
        this.nome = nome;
        this.raridade = raridade;
        this.imgCarta = imgCarta;
        this.idCarta = idCarta;
    }

    get getNome(){
        return this.nome;
    }

    get getRaridade(){
        return this.raridade;
    }

    get getImgCarta(){
        return this.imgCarta;
    }

    get getIdCarta(){
        return this.idCarta;
    }
}



