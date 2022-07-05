import {Financiamento} from "./AulaClassFinanciamento.js";
import {FinanciamentoCarencia} from "./AulaClassCarencia.js";

const comCarencia = document.querySelector("#comCarencia");
const listaSuspensa = document.getElementById("listaSuspensa");
const corpoTabela = document.querySelector("#corpoTabela");
const botaoCalcular = document.querySelector("#botaoCalcular");
const textoValor = document.querySelector("#textoValor");
const textoEntrada = document.querySelector("#textoEntrada");
const textoTaxaJuros = document.querySelector("#textoTaxaJuros");
const textoPrazo = document.querySelector("#textoPrazo");

comCarencia.addEventListener("change", function() {
    if (this.checked){
        listaSuspensa.removeAttribute("hidden");
    } else{
        listaSuspensa.setAttribute("hidden", "hidden");
    }
});

function limpaCorpoTabela(){
    while(corpoTabela.firstChild){
        corpoTabela.removeChild(corpoTabela.firstChild);
    }
}

botaoCalcular.addEventListener("click", function(){
    const valor = parseFloat(textoValor.value);
    const entrada = parseFloat(textoEntrada.value);
    const taxaJuros = parseFloat(textoTaxaJuros.value);
    const prazo = parseFloat(textoPrazo.value);

    limpaCorpoTabela();
    
    let simulacao;
    if (comCarencia.checked){
        const carencia = parseInt(listaSuspensa.value);
        simulacao = new FinanciamentoCarencia(valor, entrada, taxaJuros, prazo, carencia);
    } else {
        simulacao = new Financiamento(valor, entrada, taxaJuros, prazo);
    }
    simulacao.calcParcelasMensais();
    simulacao.exibeParcelas();
})