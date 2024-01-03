$(document).ready(function() {
    $('#telefone').mask('(00) 0000-00000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('button').click(function() {
        alert('Cadastro realizado com sucesso!');
    });

});