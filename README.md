# Sorveteria-PTS
Projeto da Sorveteria da Cadeira Projeto e Teste de Software

## Grupo
- Cawan de Melo Santos
- Ewerton Leonardo França de Souza Júnior 
- Eduardo Young Woo Kim
- Carol Barroso Cavalcanti de Albuquerque
- Luciano Machado
- João Victor Matos Brandão

# Sorveteria
# User Story 1: Cadastro de Clientes

Como atendente da sorveteria,
Eu quero cadastrar e gerenciar clientes regulares,
Para que eu possa oferecer promoções e descontos personalizados.

## Critérios de Aceitação:

- Deve ser possível adicionar, editar e remover clientes.
- Campos obrigatórios incluem nome, telefone e email.
- O sistema deve permitir o registro de preferências de sabores ou
produtos favoritos dos clientes.

## Regras de Negócio:

- Clientes cadastrados podem acumular pontos de fidelidade para trocar
por produtos ou descontos.

- O sistema deve permitir segmentar clientes para campanhas de
marketing específicas, como aniversários ou ofertas especiais.

- Os dados dos clientes devem ser protegidos conforme a LGPD (Lei
Geral de Proteção de Dados).

# User Story 2: Cadastro de Sabores de Sorvete

Como gerente da sorveteria,
Eu quero cadastrar e gerenciar os sabores de sorvete disponíveis,
Para que eu possa manter o cardápio sempre atualizado.

## Critérios de Aceitação:

- Deve ser possível adicionar, editar e remover sabores de sorvete.
- Campos obrigatórios incluem nome do sabor, categoria (ex: frutas,
chocolate, especial), e descrição.
- O sistema deve permitir a configuração de disponibilidade (sabor em
estoque ou sazonal).

## Regras de Negócio:


- Cada sabor deve ter uma descrição detalhada e, se aplicável,
informações sobre alergênicos ou restrições dietéticas (ex: sem lactose,
vegano).

- O sistema deve permitir a definição de preços diferenciados para
sabores especiais ou premium.

- Sabores em falta ou sazonais devem ser automaticamente removidos do
cardápio disponível para venda.

# User Story 3: Controle de Vendas

Como atendente da sorveteria,
Eu quero registrar as vendas realizadas,
Para que eu possa gerar recibos e controlar o estoque de sorvetes.

## Critérios de Aceitação:

- Deve ser possível registrar a venda de sorvetes por sabor, tamanho
(pequeno, médio, grande) e quantidade.

- O sistema deve gerar um recibo com detalhes da compra e possibilitar o
envio por email ou impressão.

- Deve ser possível aplicar descontos para clientes cadastrados ou
promoções em andamento.

## Regras de Negócio:

- O estoque de cada sabor de sorvete deve ser automaticamente
atualizado com cada venda registrada.

- Vendas podem ser pagas em dinheiro, cartão, ou vale-presente, e o
sistema deve registrar o método de pagamento.

- O sistema deve bloquear a venda de sabores que estejam fora de
estoque.

# User Story 4: Relatório de Vendas e Estoque

Como gerente da sorveteria,
Eu quero gerar relatórios de vendas e de estoque de sorvetes,
Para que eu possa analisar o desempenho das vendas e planejar
reabastecimentos.

## Critérios de Aceitação:

- O relatório de vendas deve incluir dados como quantidade de sorvetes
vendidos por sabor, total arrecadado e métodos de pagamento.

- O relatório de estoque deve detalhar a quantidade de sorvete disponível
de cada sabor e prever a necessidade de reabastecimento.

- Deve ser possível filtrar os relatórios por período (diário, semanal,
mensal) e exportar os dados em PDF ou Excel.

## Regras de Negócio:

- O relatório de vendas deve ser gerado com base nos registros de
transações e deve considerar eventuais descontos ou promoções
aplicadas.

- O sistema deve sugerir reabastecimento automático para sabores que
estejam abaixo de um nível mínimo de estoque.

- O histórico de relatórios deve ser mantido para comparações sazonais e
auditorias.

# User Story 5: Promoções e Campanhas de Marketing

Como gerente da sorveteria,
Eu quero criar e gerenciar promoções e campanhas de marketing,
Para que eu possa atrair mais clientes e aumentar as vendas.

## Critérios de Aceitação:

- Deve ser possível criar promoções com base em critérios como data,
tipo de sorvete, ou segmento de cliente.

- O sistema deve permitir definir descontos em porcentagem ou valor fixo,
e configurar combos (ex: compre 2, leve 3).

- As promoções devem ser automaticamente aplicadas nas vendas
elegíveis e destacadas no recibo.

Regras de Negócio:

- As promoções devem ter uma validade definida e expirar
automaticamente após o término.

- O sistema deve garantir que apenas clientes elegíveis (ex: cadastrados
ou aniversariantes) possam usufruir de promoções específicas.

- Campanhas de marketing devem permitir o envio de emails ou
mensagens de texto para clientes cadastrados, em conformidade com
as normas de privacidade.

# User Story 6: Gerenciamento de Fornecedores e Compras de Insumos

Como gerente da sorveteria,
Eu quero cadastrar e gerenciar fornecedores e compras de insumos,
Para que eu possa garantir que os ingredientes necessários estejam sempre
disponíveis.

## Critérios de Aceitação:

- Deve ser possível cadastrar fornecedores com informações como nome,
CNPJ, telefone, email e endereço.

- O sistema deve permitir registrar pedidos de compra, incluindo itens,
quantidades e datas de entrega.

- O sistema deve gerar alertas para reposição de estoque com base nas
vendas e no nível atual de insumos.

## Regras de Negócio:

- O sistema deve registrar o histórico de compras de cada fornecedor,
incluindo datas, valores e itens adquiridos.

- Deve ser possível configurar alertas de vencimento de contratos ou
acordos com fornecedores.

- A entrada de novos insumos no estoque deve atualizar automaticamente
a disponibilidade de sabores de sorvete.

