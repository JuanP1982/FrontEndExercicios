const carrinho = JSON.parse(localStorage.getItem("carrinho"));
const tableBody = document.querySelector('tbody');

carrinho.forEach((item, index) => {
    const row = document.createElement('tr');
    row.id = `item-${index}`; 

    const removeCell = document.createElement('td');
    const removeLink = document.createElement('a');
    removeLink.className = 'lixeira'
    removeLink.id = `item-${index}`
    removeCell.id = `item-${index}`
    removeLink.href = '#';
    const removeIcon = document.createElement('i');
    removeIcon.className = 'fa fa-trash';
    removeLink.appendChild(removeIcon);
    removeCell.appendChild(removeLink);
    row.appendChild(removeCell);

    const imgCell = document.createElement('td');
    const img = document.createElement('img');
    img.src = item.imagem;
    img.alt = 'Imagem do produto';
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    const nomeCell = document.createElement('td');
    nomeCell.textContent = item.nome;
    row.appendChild(nomeCell);

    const precoCell = document.createElement('td');
    precoCell.textContent = `R$${item.preco}`;
    row.appendChild(precoCell);

    const quantidadeCell = document.createElement('td');
    const quantidadeInput = document.createElement('input');
    quantidadeInput.type = 'number';
    quantidadeInput.value = item.quantidade;
    quantidadeCell.appendChild(quantidadeInput);
    row.appendChild(quantidadeCell);

    const subtotalCell = document.createElement('td');
    const subtotalSpan = document.createElement('span');
    subtotalSpan.textContent = `R$${(item.preco * item.quantidade).toFixed(2)}`;
    subtotalCell.appendChild(subtotalSpan);
    row.appendChild(subtotalCell);

    tableBody.appendChild(row);
});

let total = 0

carrinho.forEach(item => {
    const subtotal = item.preco * item.quantidade;
    total += subtotal;
    console.log('calculando')
})

let totalTexto = document.querySelector('.total');
totalTexto.textContent = `R$${total.toFixed(2)}`;

function removerItemDaTabela(id) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.remove();
        console.log(`Item com ID ${id} removido da tabela.`);
    } else {
        console.log(`Não foi possível encontrar o item com ID ${id} na tabela.`);
    }
}


function removerItemDaLista(id) {
    const carrinho = JSON.parse(localStorage.getItem("carrinho"));
    const index = carrinho.findIndex(item => item.id === id);
     total -= id.preco * id.quantidade
    if (index !== -1) {
        carrinho.splice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        console.log(`Item com ID ${id} removido da lista.`);
    } else {
        console.log(`Não foi possível encontrar o item com ID ${id} na lista.`);
    }
}


const lixeiras = document.querySelectorAll(".lixeira");


lixeiras.forEach(lixeira => {
    lixeira.addEventListener('click', () => {
        let idRemover = lixeira.id; 
        console.log(idRemover);
        removerItemDaTabela(idRemover); 
        removerItemDaLista(idRemover); 
    });
});

