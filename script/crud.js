const inNomeChocolate = document.getElementById("inNomeChocolate");
const sltCategoria = document.getElementById("sltCategoria");
const sltTipo = document.getElementById("sltTipo");
const inPrecoChocolate = document.getElementById("inPrecoChocolate");
const sltEstoque = document.getElementById("sltEstoque");
const btnCadastrar = document.getElementById("btnCadastrar");
const btnMostrar = document.getElementById("btnMostrar");
const btnConsultar = document.getElementById("btnConsultar");
const btnAlterar = document.getElementById("btnAlterar");
const btnListar = document.getElementById("btnListar");
const btnExcluir = document.getElementById("btnExcluir");
const outMensagem = document.getElementById("outMensagem");
const outCadastro = document.getElementById("outCadastro");
const outSessao = document.getElementById("outSessao");

btnCadastrar.addEventListener("click", cadastro);
btnMostrar.addEventListener("click", mostrar);
btnConsultar.addEventListener("click", consultar);
btnAlterar.addEventListener("click", alterar);
btnListar.addEventListener("click", listar);
btnExcluir.addEventListener("click", excluir);

var vetCrud = []

function cadastro () {
    var nomeInformado = inNomeChocolate.value;
    var catSelecionada = sltCategoria.value;
    var tipoSelecionado = sltTipo.value;
    var precoChoc = Number(inPrecoChocolate.value);
    var estoqueSlt = sltEstoque.value;
    

    if (nomeInformado == "") {
        alert("Insira o nome do chocolate")
        inNomeChocolate.focus()
    }
    else if (catSelecionada == "") {
        alert("Selecione uma categoria!")
        sltCategoria.focus()
    }
    else if (tipoSelecionado == "") {
        alert("Selecione um tipo de chocolate!")
        sltTipo.focus()
    }
    else if (inPrecoChocolate.value == "" || precoChoc <= 0)  {
        alert("Insira um valor para o chocolate!")
        inPrecoChocolate.focus()
    }
    else if (estoqueSlt == "") {
        alert("Selecione um estoque!")
        sltEstoque.focus()
    }
    else {
        vetCrud.push({
            nome: nomeInformado,
            categoria: catSelecionada,
            tipo: tipoSelecionado,
            preco: precoChoc,
            estoque: estoqueSlt
        })

    localStorage.setItem("produtos", JSON.stringify(vetCrud));

    outMensagem.innerHTML = "Produto cadastrado com sucesso! 🍫✔️"
    }
}

function mostrar() {
}

function consultar() {
}

function alterar() {
}

function listar() {
}

function excluir() {
}
