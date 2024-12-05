document.addEventListener('DOMContentLoaded', function () {
    // Selecionar elementos do DOM
    const registerFormElement = document.getElementById('registerFormElement');
    const successMessage = document.getElementById('successMessage'); // Mensagem de sucesso
    const errorMessage = document.getElementById('errorMessage'); // Mensagem de erro
    const loginFormElement = document.getElementById('loginFormElement'); // Formulário de login

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

        // Coletar dados de login
        const loginEmail = document.getElementById('loginEmail').value;
        const loginPassword = document.getElementById('loginPassword').value;

        const storedUserData = JSON.parse(localStorage.getItem('userData'));

        // Verificar se os dados de login são válidos
        if (storedUserData && storedUserData.email === loginEmail && storedUserData.password === loginPassword) {
            // Redirecionar para a página principal após login bem-sucedido
            window.location.href = 'index.html'; // Redireciona para a página index.html
        } else {
            // Exibir mensagem de erro abaixo do botão de login
            errorMessage.textContent = "E-mail ou senha inválidos. Tente novamente."; // Mensagem de erro
            errorMessage.classList.remove('d-none'); // Mostrar mensagem de erro
        }
    });
});
