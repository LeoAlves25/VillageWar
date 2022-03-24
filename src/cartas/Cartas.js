let raridade;
let nome;
let imgCarta;
let lvl;
let idCarta;
let forca,defesa,magia,hp;

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
     
let nomeDasCartasMiticas = ["Noel", "PauloCirillo"];

let raridadeDasCartas = ["Comum", "Raro","Lendario", "Mitico"];

let passivas = [""];

//Forca raridade/ Comum: 10~~30 / Raro: 20~~35 / Lendario: 30~~45 / Mitico: 40~~50
//Defesa raridade/ Comum: 10~~30 / Raro: 20~~35 / Lendario: 30~~45 / Mitico: 40~~50
//Magia raridade/ Comum: 10~~30 / Raro: 20~~35 / Lendario: 30~~45 / Mitico: 40~~50
//Hp raridade/ Comum: 50~~100 / Raro: 70~~150 / Lendario: 100~~250 / Mitico: 200~~300


class Carta {
    constructor(nome, raridade, imgCarta, lvl, idCarta, forca, defesa, magia, hp, passiva) {
        this.nome = nome;
        this.raridade = raridade;
        this.imgCarta = imgCarta;
        this.lvl = lvl;
        this.idCarta = idCarta;
        this.forca = forca;
        this.defesa = defesa;
        this.magia = magia;
        this.hp = hp;
        this.passiva = passiva;
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

    get getForca(){
        return this.forca;
    }

    get getDefesa(){
        return this.defesa;
    }

    get getMagia(){
        return this.magia;
    }

    get getHp(){
        return this.hp;
    }

    get getPassiva(){
        return this.passiva;
    }
}

class CartaComprada {
    constructor(nome, raridade, imgCarta, idCarta, forca, defesa, magia, hp, passiva) {
        this.nome = nome;
        this.raridade = raridade;
        this.imgCarta = imgCarta;
        this.idCarta = idCarta;
        this.forca = forca;
        this.defesa = defesa;
        this.magia = magia;
        this.hp = hp;
        this.passiva = passiva;
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
    
    get getForca(){
        return this.forca;
    }

    get getDefesa(){
        return this.defesa;
    }

    get getMagia(){
        return this.magia;
    }

    get getHp(){
        return this.hp;
    }

    get getPassiva(){
        return this.passiva;
    }
}



