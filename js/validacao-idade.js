export var idadeValido = false;

export function validaMaioridade() {

    let idadeInvalida = document.querySelector('.erro-nascimento');
    var nascimento = document.querySelector('#nascimento');
    
    const dataNascimento = new Date(nascimento.value);
    
    validaIdade(dataNascimento);

    if(validaIdade(dataNascimento) === false) {        
        idadeInvalida.innerHTML = 'Você precisa ter 18 anos ou mais para participar do evento';
    } else {
        idadeInvalida.innerHTML = '';
        return idadeValido = true;
    }
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}
