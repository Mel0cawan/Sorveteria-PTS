// Selecionar elementos do DOM
const registerFormElement = document.getElementById('registerFormElement');
const successMessage = document.getElementById('successMessage'); // Mensagem de sucesso

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

    // Exibir mensagem de sucesso
    console.log('Registro:', data); // Para fins de depuração
    successMessage.classList.remove('d-none'); // Mostrar mensagem de sucesso

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
