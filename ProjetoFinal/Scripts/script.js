const adicionar = document.querySelector('.adicionar')
adicionar.addEventListener('click', adicionarCarrinho)

let botaoSelecionado = "";
const tamanhoBotao = document.querySelectorAll('.tam input[type="button"]');

tamanhoBotao.forEach(tamanhoBotao => {
    tamanhoBotao.addEventListener('click', function() {
        botaoSelecionado = this.value;
        console.log("Botão selecionado:", botaoSelecionado);
    });
});

function adicionarCarrinho(){
const nome = document.querySelector('#nome').textContent

const imgItem = document.querySelector('#mainImg')
const imgUrl = imgItem.src

const precoString = document.querySelector('#preco').textContent
const preco = Number(precoString)

const quantidade = document.querySelector('.qtd input[type="number"]')
const quantidadeValor = quantidade.value

const produto = {
    imagem: imgUrl,
    nome: nome,
    preco: preco,
    tamanho: botaoSelecionado,
    quantidade: quantidadeValor,
    total: total = quantidadeValor * preco
}
console.log(localStorage.length)
const carrinhoString = localStorage.getItem('carrinho')
const carrinho = JSON.parse(carrinhoString)

carrinho.push(produto)

localStorage.setItem("carrinho", JSON.stringify(carrinho))

}
