const dadosGuardados = localStorage.getItem("dadosArray");
const dadosParsed = JSON.parse(dadosGuardados);
const sctProdutoFinal = document.getElementById("sctProdutoFinal")

for (ind = 0; ind < dadosParsed.length; ind++) {
    const cardLista = document.createElement("div");
    cardLista.innerHTML = `<h3>Nome: ${dadosParsed[ind].nomeInf}</h3>
         <p>Produto:${dadosParsed[ind].produto}<p>
         <p>Quantidade:${dadosParsed[ind].quantidade}</p>
         <p>Endereço: ${dadosParsed[ind].endereco}</p>
         <p>Pagamento: ${dadosParsed[ind].pag}</p>
         <p>Tipo de entrega: ${dadosParsed[ind].entrega}</p>`
    sctProdutoFinal.appendChild(cardLista)
}
