const { jsx } = require("react/jsx-runtime");

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


btnCadastrar.addEventListener("click", cadastro);
btnMostrar.addEventListener("click", mostrar);
btnConsultar.addEventListener("click", consultar);
btnAlterar.addEventListener("click", alterar);
btnListar.addEventListener("click", listar);
btnExcluir.addEventListener("click", excluir);

var vetCrud = JSON.parse(localStorage.getItem("produtos")) || []
var indSel = -1

function cadastro() {
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
    else if (inPrecoChocolate.value == "" || precoChoc <= 0) {
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

        inNomeChocolate.value = "";
        sltCategoria.selectedIndex = 0;
        sltTipo.selectedIndex = 0;
        inPrecoChocolate.value = "";
        sltEstoque.selectedIndex = 0;
    }
}

function mostrar() {

    outMensagem.innerHTML = ""

    if (vetCrud.length == 0) {
        outMensagem.innerHTML = "Nenhum chocolate foi cadastrado ainda!"
    }
    else {
        for (var ind = 0; ind < vetCrud.length; ind++) {
            outMensagem.innerHTML +=
                "Nome: " + vetCrud[ind].nome + " | " +
                "Categoria: " + vetCrud[ind].categoria + " | " +
                "Tipo: " + vetCrud[ind].tipo + " | " +
                "Preço: R$ " + vetCrud[ind].preco.toFixed(2) + " | " +
                "Estoque: " + vetCrud[ind].estoque + "<br>"
        }
    }
}

function consultar() {

    var nomeInformado = inNomeChocolate.value;
    var encontrou = false

    outMensagem.innerHTML = ""

    vetCrud = JSON.parse(localStorage.getItem("produtos")) || []

    if (nomeInformado == "") {
        alert("Insira o nome do chocolate que você deseja consultar!")
        inNomeChocolate.focus()
    }
    else {
        for (var ind = 0; ind < vetCrud.length; ind++) {
            if (vetCrud[ind].nome.toUpperCase() == nomeInformado.toUpperCase()) {
                encontrou = true

                sltCategoria.value = vetCrud[ind].categoria;
                sltTipo.value = vetCrud[ind].tipo;
                inPrecoChocolate.value = vetCrud[ind].preco;
                sltEstoque.value = vetCrud[ind].estoque

                outMensagem.innerHTML = "Produto Encontrado! <br>" +
                    "Nome: " + vetCrud[ind].nome + " | " +
                    "Categoria: " + vetCrud[ind].categoria + " | " +
                    "Tipo: " + vetCrud[ind].tipo + " | " +
                    "Preço: R$ " + vetCrud[ind].preco.toFixed(2) + " | " +
                    "Estoque: " + vetCrud[ind].estoque + "<br>"

                inNomeChocolate.value = "";
                sltCategoria.selectedIndex = 0;
                sltTipo.selectedIndex = 0;
                inPrecoChocolate.value = "";
                sltEstoque.selectedIndex = 0;

            }
        }

        if (encontrou == false) {
            outMensagem.innerHTML = "Produto não encontrado!"
            inNomeChocolate.focus()
        }
    }
}

function alterar() {

    vetCrud = JSON.parse(localStorage.getItem("produtos")) || []
    outMensagem.innerHTML = ""

    if (vetCrud.length == 0) {
        outMensagem.innerHTML = "Nenhum produto cadastrado para alterar!"
    }
    else if (indSel == -1) {
        outMensagem.innerHTML = "Selecione o produto que deseja alterar: <br>"

        for (var ind = 0; ind < vetCrud.length; ind++) {
            outMensagem.innerHTML += 
            "Nome: " + vetCrud[ind].nome + " | "
            "Categoria: " + vetCrud[ind].categoria + " | " +
            "Tipo: " + vetCrud[ind].tipo + " | "
            "Preço: R$" + Number(vetCrud[ind].preco).toFixed(2) + " | " +
            "Estoque " + vetCrud[ind].estoque +
           '<button type="button" class="btnSelecionarAlteracao" value="' + ind + '">Selecionar</button><br><br>'

           
        }
    }
}



function listar() {
}

function excluir() {
}
