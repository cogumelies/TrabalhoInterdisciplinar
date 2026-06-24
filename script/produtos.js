const listaProdutos = document.getElementById("listaProdutos");
const inPesquisa = document.getElementById("inPesquisa");
const btnPesquisar = document.getElementById("btnPesquisar");

var vetProdutosIniciais = [
    {
        nome: "Caixa Artesanal Bombons Napolitano, 175g",
        preco: 34.99,
        categoria: "Bombons",
        tipo: "Misto",
        estoque: "Disponível",
        imagem: "..imagens/neapolitan.JPG"
    },
    {
        nome: "Caixa Coração Bombons ao Leite, 185g",
        preco: 44.99,
        categoria: "Bombons",
        tipo: "Ao Leite",
        estoque: "Disponível",
        imagem: "..imagens/heartbox.JPG"
    },
    {
        nome: "Caixa Bombons Zero Açúcar, 135g",
        preco: 24.99,
        categoria: "Bombons",
        tipo: "Zero Açúcar",
        estoque: "Disponível",
        imagem: "..imagens/zero.png"
    },
    {
        nome: "Barra Chocolate Recheada Avelã 100g",
        preco: 19.99,
        categoria: "Barras",
        tipo: "Recheado",
        estoque: "Disponível",
        imagem: "..imagens/chocolatet.jpg"

    },
    {
        nome: "Barra Chocolate Recheada Morango 100g",
        preco: 19.99,
        categoria: "Barras",
        tipo: "Recheado",
        estoque: "Disponível",
        imagem: "..imagens/zero.png"
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
            '<img src="' + vetProdutos[ind].imagem + '" alt="' + vetProdutos[ind].nome + '">' +
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
}
