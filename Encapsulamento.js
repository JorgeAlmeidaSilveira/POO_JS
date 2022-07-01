//ENCAPSULAMENTO
console.log("encapsulamento");

class Laboratorio{
    #nome;
    #capacidade;
    constructor(nome, capacidade){
        this.#nome = nome;
        this.#capacidade = capacidade;
    }
    getNome(nome){
        return this.#nome;
    }
    setNome(nome){
        this.#nome = nome;
    }
    getCapacidade(capacidade){
        return this.#capacidade;
    }
    setCapacidade(capacidade){
        this.#capacidade = capacidade;
    }
}

const lab = new Laboratorio("Datawake", 20);
console.log(lab);
console.log(lab.getNome());
console.log(lab.getCapacidade());
lab.setNome("IC");
lab.setCapacidade(50);
console.log(lab.getNome());
console.log(lab.getCapacidade());