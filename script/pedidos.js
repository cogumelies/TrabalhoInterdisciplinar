const inNome = document.getElementById("inNome");
const inTelefone = document.getElementById("inTelefone");
const sltProduto = document.getElementById("sltProduto");
const inQuantidade = document.getElementById("inQuantidade");
const entregaRetirada = document.getElementById("entregaRetirada");
const entregaDelivery = document.getElementById("entregaDelivery");
const inEndereco = document.getElementById("inEndereco");
const sltPagamento = document.getElementById("sltPagamento");
const btnPedido = document.getElementById("btnPedido");

btnPedido.addEventListener("click", pedido);

var dadosGuardados = JSON.parse(localStorage.getItem("dadosArray")) || [];

var resumoPedidos = "";
var totalGeral = 0;
var numeroPedido = 0;

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
    var observacao = inObservacao.value;
    var entrega = "";

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
        alert("Se a forma de entrega for retirada, não informe endereço!");
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

        var vetProdutos = JSON.parse(localStorage.getItem("produtos")) || [];
        var indiceProduto = -1;

        for (var ind = 0; ind < vetProdutos.length; ind++) {
            if (vetProdutos[ind].nome == produto) {
                indiceProduto = ind;
            }
        }

        if (indiceProduto == -1) {
            alert("Produto não encontrado!");
            sltProduto.focus();
        }
        else {

            var precoProduto = Number(vetProdutos[indiceProduto].preco);
            var precoTotal = precoProduto * quantidade;

            dadosGuardados[dadosGuardados.length] = {
                nomeInf: nomeInf,
                tel: tel,
                produto: produto,
                quantidade: quantidade,
                entrega: entrega,
                endereco: endereco,
                pag: pag,
                observacao: observacao,
                total: precoTotal
            };

            localStorage.setItem("dadosArray", JSON.stringify(dadosGuardados));

            numeroPedido = numeroPedido + 1;
            totalGeral = totalGeral + precoTotal;

            resumoPedidos =
                resumoPedidos +
                "<br>" +
                "Pedido " + numeroPedido + "<br>" +
                "Cliente: " + nomeInf + "<br>" +
                "Telefone: " + tel + "<br>" +
                "Produto: " + produto + "<br>" +
                "Quantidade: " + quantidade + "<br>" +
                "Pagamento: " + pag + "<br>" +
                "Entrega: " + entrega + "<br>" +
                "Endereço: " + endereco + "<br>" +
                "Observação: " + observacao + "<br>" +
                "Total deste pedido: R$ " + precoTotal.toFixed(2) + "<br>";

            var outroPedido = confirm("Deseja fazer outro pedido?");

            if (outroPedido == true) {
                sltProduto.selectedIndex = 0;
                inQuantidade.value = "";
                outSaida.innerHTML = "";

                sltProduto.focus();
            }
            else {
                outSaida.innerHTML =
                    "<h3>Pedido realizado com sucesso!</h3>" +
                    resumoPedidos +
                    "<br>" +
                    "Total geral do pedido: R$ " + totalGeral.toFixed(2);

                resumoPedidos = "";
                totalGeral = 0;
                numeroPedido = 0;

                alert("Obrigado pela preferência!");
            }
        }
    }
}