let raridade;
let nome;
let imgCarta;

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

class CartaComprada {
    constructor(nome, raridade, imgCarta) {
        this.nome = nome;
        this.raridade = raridade;
        this.imgCarta = imgCarta;
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
}



