function autenticar(){
    let nome = document.getElementById('nome').value
    let dataNascimento = document.getElementById('data_nascimento').value
    let cpf = document.getElementById('cpf').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    if (email==''){
        alert('Email está vazio')
    }else if(senha==''){
        alert ('Senha esta vazia')
    }else if (cpf==''){
        alert ('cpf está vazia')
    }else if (nome==''){
        alert('email está vazio')
    }else {
        alert ('Voce foi autenticado')
    }

}
