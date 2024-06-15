document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a submissão inicial do formulário

    const dataNascimento = document.getElementById('inp_data_nascimento').value;
    const hoje = new Date();
    const dataNasc = new Date(dataNascimento);

    const idade = hoje.getFullYear() - dataNasc.getFullYear();
    const mes = hoje.getMonth() - dataNasc.getMonth();
    const dia = hoje.getDate() - dataNasc.getDate();

    if (idade < 18 || (idade === 18 && (mes < 0 || (mes === 0 && dia < 0)))) {
        alert('Você deve ter mais de 18 anos para se cadastrar.');
    } else {
        alert('Cadastrado com sucesso!');
        setTimeout(function() {
            event.target.submit(); // Submete o formulário após exibir a mensagem
        }, 100); // Ajuste o tempo de acordo com a necessidade
    }
});
