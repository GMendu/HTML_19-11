var preco = 5;
var qtd = 14;
var total = preco * qtd;

var elemento = document.getElementById('preco');
elemento.textContent = 'R$' + total;
elemento.innerHTML = '<h3>R$' + total + '</h3>'; 