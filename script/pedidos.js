const inNome = document.getElementById("inNome");
const inTelefone = document.getElementById("inTelefone");
const sltProduto = document.getElementById("sltProduto");
const inQuantidade = document.getElementById("inQuantidade");
const entregaRetirada = document.getElementById("entregaRetirada");
const entregaDelivery = document.getElementById("entregaDelivery");
const inEndereco = document.getElementById("inEndereco");
const sltPagamento = document.getElementById("sltPagamento");
const btnPedido = document.getElementById("btnPedido");
const valorTotal = document.getElementById("valorTotal");

btnPedido.addEventListener("click", pedido)

var dadosGuardados = []

function carregarProdutosPedido() {
    var vetProdutos = JSON.parse(localStorage.getItem("produtos")) || [];

    sltProduto.innerHTML = '<option value="" selected disabled>Selecione:</option>';

    if (vetProdutos.length == 0) {
        sltProduto.innerHTML +=
            '<option value="" disabled>Nenhum produto cadastrado</option>';
    }
    else {
        for (var ind = 0; ind < vetProdutos.length; ind++) {

            if (vetProdutos[ind].estoque == "Esgotado") {
                sltProduto.innerHTML +=
                    '<option value="' + vetProdutos[ind].nome + '" disabled>' +
                    vetProdutos[ind].nome + ' | R$ ' +
                    Number(vetProdutos[ind].preco).toFixed(2) + ' | ' +
                    vetProdutos[ind].estoque +
                    '</option>';
            }
            else {
                sltProduto.innerHTML +=
                    '<option value="' + vetProdutos[ind].nome + '">' +
                    vetProdutos[ind].nome + ' | R$ ' +
                    Number(vetProdutos[ind].preco).toFixed(2) + ' | ' +
                    vetProdutos[ind].estoque +
                    '</option>';
            }
        }
    }
}

carregarProdutosPedido();

function pedido() {
    var nomeInf = inNome.value;
    var tel = inTelefone.value;
    var produto = sltProduto.value;
    var quantidade = Number(inQuantidade.value);
    var endereco = inEndereco.value;
    var pag = sltPagamento.value;
    var entrega = "";
    var precoTotal = 0

    if (entregaRetirada.checked) {
        entrega = entregaRetirada.value;
    }
    else if (entregaDelivery.checked) {
        entrega = entregaDelivery.value;
    }

    if (nomeInf == "") {
        alert("Insira o seu nome!");
        inNome.focus();
    }
    else if (tel == "") {
        alert("Insira seu número de telefone!");
        inTelefone.focus();
    }
    else if (produto == "") {
        alert("Selecione o produto que você deseja!");
        sltProduto.focus();
    }
    else if (inQuantidade.value == "" || quantidade <= 0) {
        alert("Insira a quantidade de produtos!");
        inQuantidade.focus();
    }
    else if (entrega == "") {
        alert("Selecione a forma de entrega!");
    }
    else if (entrega == "Retirada" && endereco != "") {
        alert("Se a forma de entrega for retirada na loja, não informe endereço!");
        inEndereco.focus();
    }
    else if (entrega == "Delivery" && endereco == "") {
        alert("Informe seu endereço!");
        inEndereco.focus();
    }
    else if (pag == "") {
        alert("Selecione a forma de pagamento!");
        sltPagamento.focus();
    }
    else {
        var outroPedido = confirm("Pedido realizado com sucesso! Deseja fazer outro pedido?");

        dadosGuardados.push({ nomeInf, tel, produto, quantidade, entrega, endereco, pag })
        localStorage.setItem("dadosArray", JSON.stringify(dadosGuardados));

        if (outroPedido == true) {
            sltProduto.selectedIndex = 0;
            inQuantidade.value = "";
            sltProduto.focus();
            valorTotal.innerHTML = "";
        }
        else {
            window.location.href = "sucesso.html";
        }
        for (let ind = 0; ind < vetProdutos.length; ind++){
            precoTotal = vetProdutos[ind].preco * quantidade
            valorTotal.innerHTML += precoTotal
        }
    }
}