const tipo = document.getElementById('password');
const btnMostrar = document.getElementById('mostrar');
const btnEsconder = document.getElementById('esconde');

function mostrarSenha() {

    if (tipo.type == 'password') {
        tipo.type = 'text';
        btnMostrar.style.display = 'block'
        btnEsconder.style.display = 'none'
    }
    else {
        tipo.type = 'password';
        btnMostrar.style.display = 'none'
        btnEsconder.style.display = 'block'

    }
}

carregarEventos();
function carregarEventos() {
    btnMostrar.addEventListener('click', mostrarSenha)
    btnEsconder.addEventListener('click', mostrarSenha)
}
    
