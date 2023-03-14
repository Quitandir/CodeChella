function criaIngresso () {
    
    const dadosParaIngresso = JSON.parse(localStorage.getItem("ingresso"));
    document.querySelector('[data-nome]').innerHTML = dadosParaIngresso[0];
    document.querySelector('[data-setor]').innerHTML = dadosParaIngresso[1];
    window.localStorage.clear();
    console.log(dadosParaIngresso);

}

criaIngresso();