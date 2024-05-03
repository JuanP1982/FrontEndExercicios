const adicionar = document.querySelector('.adicionar');
adicionar.addEventListener('click', adicionarCarrinho);

let idItem = 0; 


const ultimoId = JSON.parse(localStorage.getItem('ultimoId'));
if (ultimoId !== null) {
    idItem = ultimoId + 1;
}

let botaoSelecionado = "";
const tamanhoBotao = document.querySelectorAll('.tam input[type="button"]');

tamanhoBotao.forEach(tamanhoBotao => {
    tamanhoBotao.addEventListener('click', function() {
        botaoSelecionado = this.value;
        console.log("Botão selecionado:", botaoSelecionado);
    });
});

function adicionarCarrinho(){
    const nome = document.querySelector('#nome').textContent;

    const imgItem = document.querySelector('#mainImg');
    const imgUrl = imgItem.src;

    const precoString = document.querySelector('#preco').textContent;
    const preco = Number(precoString);

    const quantidade = document.querySelector('.qtd input[type="number"]');
    const quantidadeValor = quantidade.value;

    const produto = {
        id: `item-${idItem}`, 
        imagem: imgUrl,
        nome: nome,
        preco: preco,
        tamanho: botaoSelecionado,
        quantidade: quantidadeValor,
        total: quantidadeValor * preco
    };

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || []; 
    carrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    idItem++; 
    window.alert("Item Adicionado ao carrinho!");
}