const produtos = [
    {
        nome: "Caixa artesanal bombons napolitano 175g",
        preco: 34.99,
        categoria: "Bombons"
    },
    {
        nome: "Caixa coração bombons ao leite 185g",
        preco: 44.99,
        categoria: "Bombons"
    },
    {
        nome: "Caixa bombons zero açúcar 135g",
        preco: 24.99,
        categoria: "Zero Açúcar"
    },

    {
        nome: "Barra chocolate recheada avelã 100g",
        preco: 19.99,
        categoria: "Barras"
    }
    ,
    {
        nome: "Barra chocolate recheada morango 100g",
        preco: 19.99,
        categoria: "Barras"
    }
    ,
];

function criarCard(produto) {
    return `
        <div class="card">
            <h3>${produto.nome}</h3>
            <p><strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}</p>
            <p><strong>Categoria:</strong> ${produto.categoria}</p>
            <button>Comprar</button>
        </div>
    `;
}

const container = document.getElementById("container-produtos");

for (let i = 0; i < produtos.length; i++) {
    container.innerHTML += criarCard(produtos[i]);
}

function exportarJSON() {
    const json = JSON.stringify(produtos, null, 2);

    console.log(json);

    document.getElementById("saida-json").textContent = json;
}
