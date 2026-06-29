const formPedido = document.getElementById("formPedido");
const inNome = document.getElementById("inNome");
const inTelefone = document.getElementById("inTelefone");
const sltProduto = document.getElementById("sltProduto");
const inQuantidade = document.getElementById("inQuantidade");
const entregaRetirada = document.getElementById("entregaRetirada");
const entregaDelivery = document.getElementById("entregaDelivery");
const inEndereco = document.getElementById("inEndereco");
const sltPagamento = document.getElementById("sltPagamento");
const inObservacao = document.getElementById("inObservacao");
const outSaida = document.getElementById("outSaida");
const btnPedido = document.getElementById("btnPedido");

btnPedido.addEventListener("click", pedido)

var dadosCadastrados = []

function pedido() {
    var nomeInf = inNome.value
    var tel = inTelefone.value;
    var produto = sltProduto.value;
    var quantidade = Number(inQuantidade.value);
    //var entregaR = entregaRetirada.value;
    //var entregaD = entregaDelivery.value;
    var endereco = inEndereco.value;
    var pag = sltPagamento.value;
    var entrega = ""

    if (entregaRetirada.checked) {
        entrega = entregaRetirada.value;
    } 
    else if (entregaDelivery.checked) {
        entrega = entregaDelivery.value;
    }


    if (nomeInf == "") {
        alert("Insira o seu nome!")
        inNome.focus()
    }
    else if (tel == "") {
        alert("Insira seu número de telefone!")
        inTelefone.focus()
    }
    else if (produto == "") {
        alert("Selecione o produto que você deseja!")
        sltProduto.focus()
    }
    else if (inQuantidade.value == "" || quantidade <= 0) {
        alert("Insira a quantidade de produtos ")
        inQuantidade.focus()
    }
    else if (entrega == "") {
        alert("Selecione a forma de entrega!");
    }
    else if (entrega == "Retirada" && endereco !== "" ) {
        alert("Se a forma de entrega for retirada na loja, não informe endereço!")
        inEndereco.focus()
    }
    else if (entrega == "Delivery" && endereco == "") {
        alert("Informe seu endereço!");
        inEndereco.focus();
    }
    else if (pag == "") {
        alert("Selecione a forma de pagamento!")
        sltPagamento.focus()
    }
    else {
        var outroPedido = confirm("Pedido realizado com sucesso! Deseja fazer outro pedido?")
        dadosCadastrados.push({nomeInf, tel, produto, quantidade, endereco, pag, entrega})
        localStorage.setItem("dadosArray", JSON.stringify(dadosCadastrados))

        if (outroPedido == true) {
            sltProduto.selectedIndex = 0
            inQuantidade.value = ""
            sltProduto.focus()
        }
        else {
            
            window.location.href = 'sucesso.html'
        }
    }
}
