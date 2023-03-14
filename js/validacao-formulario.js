import { validaNome, nomeValido } from "./validacao-nome.js";
import { validaEmail, emailValido } from "./validacao-email.js";
import { validaMaioridade, idadeValido } from "./validacao-idade.js";
import  capturaCampos  from "./captura-campos.js";

let botao = document.querySelector('[data-botao]');


botao.addEventListener('click', (e) => {

    e.preventDefault();
    validaNome();
    validaEmail();
    validaMaioridade();
   
    if (nomeValido == true && emailValido == true && idadeValido == true) {
        
        capturaCampos();
        window.location.href = './ingresso.html'
    }

})







