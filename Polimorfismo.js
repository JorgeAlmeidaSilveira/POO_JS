//POLIMORFISMO
console.log("polimorfismo");

class Produto{
    #tipo;
    constructor(tipo){
        this.#tipo = tipo;
    }
    getDados(){
        return this.#tipo;
    }
}

class Livro extends Produto{
    #titulo;
    #numPag;
    constructor(tipo, titulo, numPag){
        super(tipo);
        this.#titulo = titulo;
        this.#numPag = numPag;
    }
    getDados(){
        //usa o super no getDados, porque se usar o this. vai confudir com o
        //proprio metodo criado
        return (`
        Tipo: ${super.getDados()}
        Titulo: ${this.#titulo}
        Num. pág.: ${this.#numPag}
        `);
    }
}

const Prod = new Produto("Jorgueto");
console.log(Prod.getDados());

const Liv = new Livro ("JooR", "Livreto", 666);
console.log(Liv.getDados());