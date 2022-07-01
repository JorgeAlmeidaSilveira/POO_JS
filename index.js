//uso de strict serve para declarar no JS que as variáveis precisam ser declaradas
console.log("index");
"use strict";

class Filme {
    title = "";
    year = 2022;
    static diretor = "Tarantino";
    constructor(titulo, ano) {
        this.title = titulo;
        this.year = ano;
    }
};

class Financiamento {
    valorFinanciamento;
    taxaJuros = 1;
    constructor(valorFinanciamento, taxaJuros) {
        this.valorFinanciamento = valorFinanciamento;
        this.taxaJuros = taxaJuros;
    };
};

class Disciplina {
    codigo;
    nome;
    constructor(codigo, nome) {
        this.codigo = codigo;
        this.nome = nome;
    }
};

let meuFilme = new Filme("Aprendendo JS", "2022");
console.log(meuFilme.title);
console.log(meuFilme.year);
console.log(meuFilme.diretor); //não mostra pois foi declarado como static
console.log(Filme.diretor);//só mostra o static, porque estou olhando pra classe

let fin = new Financiamento(1000, 1.05);
console.log(fin.valorFinanciamento);
console.log(fin.taxaJuros);

const disciplina1 = new Disciplina(589, "Matemágica");

class Musica{
    static formato = "mp3";
    nomeMusica;
    #duracao; //atributo privado
    constructor(nomeMusica, duracao){
        this.nomeMusica = nomeMusica;
        this.#duracao = duracao;
    };

    static converteSegundosEmMinutos(duracao){
        const min = Math.floor(duracao/60);
        let seg = duracao % 60;
        if (seg < 10 && seg > 0){
            seg = `0${duracao%60}`;
        } else if (seg < 10) {
            seg = "00";
        }
            return `${min}:${seg}`;
    }
    getDuracao(){
        return this.#duracao;
    }
}

let newSong = new Musica("ABC",5000); //tem que construir dessa forma quando usar o metodo aberto
console.log(newSong.nomeMusica);
//console.log(newSong.converteSegundosEmMinutos(5000)); //dá erro
console.log(Musica.converteSegundosEmMinutos(5000)); //tem que construir dessa forma quando usar o metodo static
