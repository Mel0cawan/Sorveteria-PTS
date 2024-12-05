    // Seleção de elementos
    const addClientBtn = document.getElementById('addClientBtn');
    const addProductBtn = document.getElementById('addProductBtn');
    const clientForm = document.getElementById('clientForm');
    const productForm = document.getElementById('productForm');
    const clientsTable = document.getElementById('clientsTable');
    const productsTable = document.getElementById('productsTable');
    const clientModal = new bootstrap.Modal(document.getElementById('clientModal'));
    const productModal = new bootstrap.Modal(document.getElementById('productModal'));

    // Armazenamento de dados
    let clients = [];
    let products = [];

    // Validação de CPF
    function validarCPF(cpf) {
        cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

        let soma = 0, resto;
        for (let i = 1; i <= 9; i++) soma += parseInt(cpf[i - 1]) * (11 - i);
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf[9])) return false;

        soma = 0;
        for (let i = 1; i <= 10; i++) soma += parseInt(cpf[i - 1]) * (12 - i);
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        return resto === parseInt(cpf[10]);
    }

    // Funções para adicionar cliente
    addClientBtn.addEventListener('click', () => {
        document.getElementById('clientIndex').value = '';
        clientForm.reset();
        clientModal.show();
    });

    clientForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const cpf = document.getElementById('clientCPF').value;

        if (!validarCPF(cpf)) {
            alert('CPF inválido. Por favor, insira um CPF válido.');
            return;
        }

        const client = {
            name: document.getElementById('clientName').value,
            cpf: cpf,
            address: document.getElementById('clientAddress').value,
            phone: document.getElementById('clientPhone').value,
            email: document.getElementById('clientEmail').value,
            payment: document.getElementById('clientPayment').value,
        };

        const index = document.getElementById('clientIndex').value;
        if (index !== '') {
            clients[index] = client; // Atualiza cliente existente
        } else {
            clients.push(client); // Adiciona novo cliente
        }

        updateClientTable();
        clientModal.hide();
    });

    // Funções para adicionar produto
    addProductBtn.addEventListener('click', () => {
        document.getElementById('productIndex').value = '';
        productForm.reset();
        productModal.show();
    });

    productForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const product = {
            name: document.getElementById('productName').value,
            flavor: document.getElementById('productFlavor').value,
            price: document.getElementById('productPrice').value,
            stock: document.getElementById('productStock').value,
            lactose: document.getElementById('productLactose').value,
        };

        const index = document.getElementById('productIndex').value;
        if (index !== '') {
            products[index] = product; // Atualiza produto existente
        } else {
            products.push(product); // Adiciona novo produto
        }

        updateProductTable();
        productModal.hide();
    });

    // Função para atualizar tabela de clientes
    function updateClientTable() {
        clientsTable.innerHTML = '';
        clients.forEach((client, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${client.name}</td>
                <td>${client.cpf}</td>
                <td>${client.address}</td>
                <td>${client.phone}</td>
                <td>${client.email}</td>
                <td>${client.payment}</td>
                <td class="actions">
                    <button class="btn btn-warning btn-sm" onclick="editClient(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteClient(${index})">Excluir</button>
                </td>
            `;
            clientsTable.appendChild(row);
        });
    }
    

    // Função para editar cliente
    function editClient(index) {
        const client = clients[index];
        document.getElementById('clientName').value = client.name;
        document.getElementById('clientCPF').value = client.cpf;
        document.getElementById('clientAddress').value = client.address;
        document.getElementById('clientPhone').value = client.phone;
        document.getElementById('clientEmail').value = client.email;
        document.getElementById('clientPayment').value = client.payment;
        document.getElementById('clientIndex').value = index;
        clientModal.show();
    }
    

    // Função para excluir cliente
    function deleteClient(index) {
        if (confirm('Tem certeza que deseja excluir este cliente?')) {
            clients.splice(index, 1);
            updateClientTable();
        }
    }

    // Função para atualizar tabela de produtos
    function updateProductTable() {
        productsTable.innerHTML = '';
        products.forEach((product, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.flavor}</td>
                <td>${product.price}</td>
                <td>${product.lactose}</td>
                <td>${product.stock}</td>
                <td class="actions">
                    <button class="btn btn-warning btn-sm" onclick="editProduct(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteProduct(${index})">Excluir</button>
                </td>
            `;
            productsTable.appendChild(row);
        });
    }

    // Função para editar produto
    function editProduct(index) {
        const product = products[index];
        document.getElementById('productName').value = product.name;
        document.getElementById('productFlavor').value = product.flavor;
        document.getElementById('productPrice').value = product.price;
        document.getElementById('productStock').value = product.stock;
        document.getElementById('productLactose').value = product.lactose;
        document.getElementById('productIndex').value = index;
        productModal.show();
    }

    // Função para excluir produto
    function deleteProduct(index) {
        const product = products[index];
        if (product.stock > 0) {
            alert('Este produto ainda possui itens em estoque e não pode ser excluído.');
            return;
        }
        if (confirm('Tem certeza que deseja excluir este produto?')) {
            products.splice(index, 1);
            updateProductTable();
        }
    }

    // Inicializar tabelas ao carregar a página
    updateClientTable();
    updateProductTable();
