document.addEventListener('DOMContentLoaded', function () {
    // Selecionar elementos do DOM
    const registerFormElement = document.getElementById('registerFormElement');
    const successMessage = document.getElementById('successMessage'); // Mensagem de sucesso
    const errorMessage = document.getElementById('errorMessage'); // Mensagem de erro
    const loginFormElement = document.getElementById('loginFormElement'); // Formulário de login
    const loginError = document.getElementById('loginError'); // Mensagem de erro no login

    // Manipular envio do formulário de registro
    registerFormElement.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar recarregar a página

        // Coletar dados do formulário
        const formData = new FormData(registerFormElement);
        const data = {
            name: formData.get('name'),
            cpf: formData.get('cpf'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            password: formData.get('password'),
        };

        // Armazenar os dados de registro no localStorage
        localStorage.setItem('userData', JSON.stringify(data));

        // Exibir mensagem de sucesso
        console.log('Registro:', data); // Para fins de depuração
        successMessage.classList.remove('d-none'); // Mostrar mensagem de sucesso
        errorMessage.classList.add('d-none'); // Esconder a mensagem de erro

        // Limpar o formulário após o envio
        registerFormElement.reset();
    });

    // Alternar para o formulário de Login
    document.getElementById('switchToLogin').addEventListener('click', () => {
        document.getElementById('loginForm').classList.remove('d-none');
        document.getElementById('registerForm').classList.add('d-none');
    });

    // Alternar para o formulário de Registro
    document.getElementById('switchToRegister').addEventListener('click', () => {
        document.getElementById('registerForm').classList.remove('d-none');
        document.getElementById('loginForm').classList.add('d-none');
    });

    // Manipular envio do formulário de login
    loginFormElement.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar recarregar a página

        // Coletar dados do formulário
        const formData = new FormData(loginFormElement);
        const email = formData.get('email');
        const password = formData.get('password');

        // Verificar se as credenciais estão corretas
        const userData = JSON.parse(localStorage.getItem('userData'));

        // Garantir que os dados de userData existem e não são nulos
        if (userData && userData.email === email && userData.password === password) {
            alert('Login bem-sucedido!');
            window.location.href = "index.html"; // Redireciona para o painel de controle após login
        } else {
            // Exibir erro caso as credenciais sejam inválidas
            loginError.classList.remove('d-none'); // Exibir mensagem de erro
            loginError.textContent = 'Credenciais incorretas!'; // Mensagem de erro específica
            successMessage.classList.add('d-none'); // Esconder mensagem de sucesso
        }
    });
});
