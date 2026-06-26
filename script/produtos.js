const listaProdutos = document.getElementById("listaProdutos");
const inPesquisa = document.getElementById("inPesquisa");
const btnPesquisar = document.getElementById("btnPesquisar");

var vetProdutosIniciais = [
    {
        nome: "Caixa Artesanal Bombons Napolitano, 175g",
        preco: 34.99,
        categoria: "Bombons",
        tipo: "Misto",
        estoque: "Disponível"
    },
    {
        nome: "Caixa Coração Bombons ao Leite, 185g",
        preco: 44.99,
        categoria: "Bombons",
        tipo: "Ao Leite",
        estoque: "Disponível"
    },
    {
        nome: "Caixa Bombons Zero Açúcar, 135g",
        preco: 24.99,
        categoria: "Bombons",
        tipo: "Zero Açúcar",
        estoque: "Disponível"
    },
    {
        nome: "Barra Chocolate Recheada Avelã 100g",
        preco: 19.99,
        categoria: "Barras",
        tipo: "Recheado",
        estoque: "Disponível"

    },
    {
        nome: "Barra Chocolate Recheada Morango 100g",
        preco: 19.99,
        categoria: "Barras",
        tipo: "Recheado",
        estoque: "Disponível"
    }
];


/* carregar dados no localstorage e mostrar os produtos na tela*/
var vetProdutos = [];

function carregarProdutos() {
    var dados = JSON.parse(localStorage.getItem("produtos"));

    if (dados == null) {
        for (var ind = 0; ind < vetProdutosIniciais.length; ind++) {
            vetProdutos.push(vetProdutosIniciais[ind]);
        }

        localStorage.setItem("produtos", JSON.stringify(vetProdutos));
    } else {
        vetProdutos = dados;
    }
}

function mostrar() {
    listaProdutos.innerHTML = "";

    for (var ind = 0; ind < vetProdutos.length; ind++) {
        listaProdutos.innerHTML +=
            '<div class="produto">' +
            '<h3>' + vetProdutos[ind].nome + '</h3>' +
            '<p>Preço: R$ ' + vetProdutos[ind].preco.toFixed(2) + '</p>' +
            '<p>Categoria: ' + vetProdutos[ind].categoria + '</p>' +
            '<p>Tipo: ' + vetProdutos[ind].tipo + '</p>' +
            '<p>Estoque: ' + vetProdutos[ind].estoque + '</p>' +
            '</div>'
    }
}

carregarProdutos();
mostrar();

/* pesquisa e filtros de produtos - ana e jose */

btnPesquisar.addEventListener("click", pesquisa)

function pesquisa() {
    var pesquisa = inPesquisa.value
    var produtos = JSON.parse(localStorage.getItem("produtos"));

    for (i = 0; i < produtos.length; i++) {
        if (produtos[i].nome == "") {
            resultado = '<div class="produto">' +
                '<h3>' + "Produto não encontrado" + '</h3>' +
                '</div>'
            listaProdutos.innerHTML += resultado

        }

    }

}

function filtro () {
    
}
