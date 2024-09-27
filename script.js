// Código JS básico para atualizar o contador do carrinho
let cartCount = 0;

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        document.querySelector('.cart-btn').innerHTML = `<i class="bi bi-cart"></i> Carrinho (${cartCount} itens)`;
    });
});
