document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let senha = document.getElementById('senha').value;
    let confirmarSenha = document.getElementById('confirmar-senha').value;
    if (senha === confirmarSenha) {
        document.querySelector('.register').classList.add('hidden');
        document.querySelector('.dashboard').classList.remove('hidden');
        generateChart();
    } else {
        alert('As senhas não coincidem!');
    }
});
