document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const dataNascimento = document.getElementById('inp_data_nascimento').value;
    const senha = document.getElementById('inp_senha').value;
    const hoje = new Date();
    const dataNasc = new Date(dataNascimento);

    const idade = hoje.getFullYear() - dataNasc.getFullYear();
    const mes = hoje.getMonth() - dataNasc.getMonth();
    const dia = hoje.getDate() - dataNasc.getDate();

    if (idade < 18 || (idade === 18 && (mes < 0 || (mes === 0 && dia < 0)))) {
        alert('Você deve ter mais de 18 anos para se cadastrar.');
        document.getElementById('inp_data_nascimento').value = '';
        return;
    }

    if (senha.length < 6) {
        alert('A senha deve ter mais de 6 caracteres.');
        document.getElementById('inp_senha').value = '';
        return;
    }

    alert('Cadastrado com sucesso!');
    setTimeout(function() {
        event.target.submit(); 
    }, 100); 
});