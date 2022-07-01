//HERANÇA
console.log("herança");
class Produto{
    tipo;
    constructor(tipo){
        this.tipo = tipo;
    }

    getDados(){
        return `Tipo: ${this.tipo}`
    }
}

class Livro extends Produto{
    titulo;
    numPag;
    var1;
    constructor(titulo, numPag, var1){
        super(var1);
        this.titulo = titulo;
        this.numPag = numPag;
        console.log(this.getDados());
        console.log(super.getDados());
    }
}

const Prod = new Produto("Jorgueto");
console.log(Prod.getDados());

const Liv = new Livro ("JooR", 66, "Livreto");
console.log(Liv.tipo);
console.log(Liv.getDados());