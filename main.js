function toogle(){
    var tipo = document.getElementById('password');
    var btn = document.getElementById('eye');
    var btn2 = document.getElementById('esconde');

    if(tipo.type == 'password'){
        tipo.type = "text";
        btn.classList.toggle('ativo');
        btn2.classList.toggle('ativou');
    }
    else{
        tipo.type = "password";
        btn.classList.toggle('ativo');
        btn2.classList.toggle('ativou');
    }
}
    