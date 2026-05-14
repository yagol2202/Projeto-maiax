// 1. Seleção correta (faltava o ponto da classe)
const botoesComprar = document.querySelectorAll('.btn-comprar');
const corpoCarrinho = document.querySelector('.offcanvas-body div');
const pedidoRealizado = document.querySelector('.fazerPedido')
let itensCarrinho = [];


botoesComprar.forEach((botao) => {
    botao.addEventListener('click', () => {
        const produtoElemento = botao.closest('.produto');
        const nome = produtoElemento.querySelector('h3').innerText;
        const preco = produtoElemento.querySelector('.preco').innerText;

        adicionarAoCarrinho(nome, preco);
    });
});

function adicionarAoCarrinho(nome, preco) {
    itensCarrinho.push({ nome, preco });
    atualizarInterface();
}


function atualizarInterface() {
    corpoCarrinho.innerHTML = "";

    if (itensCarrinho.length === 0) {
        corpoCarrinho.innerHTML = "Seu carrinho está vazio.";
        return;
    }

    itensCarrinho.forEach((item) => {
        const itemHtml = `
            <div class="d-flex justify-content-between align-items-center mb-2 border-bottom pb-2 text-white">
                <span>${item.nome}</span>
                <span class="badge bg-primary">${item.preco}</span>
            </div>
        `;
        corpoCarrinho.innerHTML += itemHtml;
    });
}


