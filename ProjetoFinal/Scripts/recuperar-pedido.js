const carrinho = JSON.parse(localStorage.getItem("carrinho"))
console.log(carrinho)
const body = document.querySelector('body')

carrinho.forEach(item => {
    const div = document.createElement('div')
    div.className = 'corpo'
    const h4nome = document.createElement('h4')
    h4nome.className = 'nome'
    h4nome.textContent = item.nome

    const h2preco = document.createElement('h2')
    h2preco.className = "preco"
    h2preco.textContent = item.preco

    const h3tam = document.createElement('h3')
    h3tam.className = 'tam'
    h3tam.textContent = item.tamanho

    const h3qnt = document.createElement('h3')
    h3qnt.className = 'qnt'
    h3qnt.textContent = item.quantidade

    div.appendChild(h4nome)
    div.appendChild(h2preco)
    div.appendChild(h3tam)
    div.appendChild(h3qnt)
    body.appendChild(div)
});