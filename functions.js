let preçoInput = document.getElementById("preco");
let botao = document.getElementById("botao");
let tabela = document.getElementById("tabela");

const handleChangePreço = (e) => {
  v = e.target.value;
  console.log(v);
};

const clicou = () => {
  for (let i = 1; i <= 50; i++) {
    let price = v * i;
    let priceDecimal = price.toFixed(2);
    var tag = document.createElement("p"); 
    var text = document.createTextNode(`${i} - R$ ${priceDecimal}`);
    tag.appendChild(text);
    tabela.appendChild(tag);
  }
};

preçoInput.addEventListener("change", handleChangePreço);
botao.addEventListener("click", clicou);