export let nomeValido = false;

export function validaNome() {

    var nome = document.querySelector('#nome-completo');
    var nomeInvalido = document.querySelector('.erro-nome');
    

    if (nome.value.length == 0) {
        nomeInvalido.innerHTML = 'O campo não pode estar em branco.'
    } else if (nome.value.length <= 7) {
        nomeInvalido.innerHTML = 'Seu nome completo deve conter mais de 6 caractéres.'
    } else {
        nomeInvalido.innerHTML = "";
        return nomeValido = true;
    }
}

