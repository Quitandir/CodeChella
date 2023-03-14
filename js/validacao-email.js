export var emailValido = false;

export function validaEmail() {
    
    var email = document.querySelector('#email');
    var emailInvalido = document.querySelector('.erro-email');
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    

    if (email.value.length == 0) {
        emailInvalido.innerHTML = 'O campo não pode estar em branco.'
    } else if (!email.value.match(validRegex)) {
        emailInvalido.innerHTML = 'Email em formato inválido.'
    } else {
        emailInvalido.innerHTML = "";
        return emailValido = true;
        
    }

}