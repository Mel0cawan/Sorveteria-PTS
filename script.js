let cartCount = 0;
let cartItems = []; // Array para armazenar os itens do carrinho

// Adicionar produtos ao carrinho
document.querySelectorAll('.add-to-cart-btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h5').textContent;
        const productPrice = parseFloat(button.parentElement.querySelector('.price').textContent.replace('R$', '').replace(',', '.'));

        const existingProduct = cartItems.find(item => item.name === productName);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cartItems.push({ name: productName, price: productPrice, quantity: 1 });
        }

        cartCount++;
        updateCart();
    });
});

// Função para atualizar o carrinho
function updateCart() {
    // Atualiza o contador de itens no carrinho
    document.querySelector('.cart-btn').innerHTML = `<i class="bi bi-cart"></i> Carrinho (${cartCount} itens)`;

    const cartItemsList = document.querySelector('#cartItems');
    cartItemsList.innerHTML = ''; // Limpa a lista de itens no carrinho
    let totalPrice = 0;

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.innerHTML = `${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantity} 
            <button class="btn btn-danger btn-sm float-end remove-item-btn">Remover</button>`;
        cartItemsList.appendChild(listItem);
        totalPrice += item.price * item.quantity;
    });

    document.querySelector('#totalPrice').textContent = totalPrice.toFixed(2);
    
    // Função de remoção de item
    document.querySelectorAll('.remove-item-btn').forEach(button => {
        button.addEventListener('click', () => {
            const itemName = button.parentElement.textContent.split(' - ')[0];
            cartItems = cartItems.filter(item => item.name !== itemName);
            cartCount--;
            updateCart();
        });
    });
}

// Função de finalização de compra
document.querySelector('#checkoutBtn').addEventListener('click', () => {
    const address = document.querySelector('#address').value;
    const paymentMethod = document.querySelector('#paymentMethod').value;

    if (address && paymentMethod) {
        alert(`Compra finalizada com sucesso! Endereço: ${address} | Pagamento via: ${paymentMethod}`);
        // Resetar carrinho após compra
        cartItems = [];
        cartCount = 0;
        updateCart();
    } else {
        alert('Por favor, preencha todos os campos antes de finalizar a compra.');
    }
});
