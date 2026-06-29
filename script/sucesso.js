const sctProdutoFinal = document.getElementById("sctProdutoFinal");

sctProdutoFinal.innerHTML = "";

const vetCrud = JSON.parse(localStorage.getItem("produtos")) || [];
