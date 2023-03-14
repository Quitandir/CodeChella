export default function capturaCampos () {

    var nome = document.querySelector('#nome-completo');
    var ingresso = document.querySelector('#tipo-ingresso');
    var dadosParaIngresso = [nome.value, ingresso.value];
    window.localStorage.setItem('ingresso', JSON.stringify(dadosParaIngresso)) 
    console.log(dadosParaIngresso);
}

