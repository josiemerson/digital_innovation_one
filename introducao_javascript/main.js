var $ = document.getElementById.bind(document);

function clickButton() {
    //alert("Obrigado por clicar.")    
    var agradecimento = $("agradecimento");
    agradecimento.innerHTML = "Obrigado por clicar";
}


function loadPage() {
    alert("Load Page finalized.")
    window.open("https://www.google.com.br");
    // window.location.href = "https://www.google.com.br";
}

function onChangeOptions(elemento) {
    $("valueOption").innerHTML = elemento.value;
}


function replaceMouseOver(elemento) {
    // $("mouseoverout").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Obrigado por passar o mouse!";
}

function replaceMouseOut(elemento) {
    // $("mouseoverout").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui!";
}
/*
//caso eu defina o this.petalCount e não defina no bloom o this.declare.bind(this)
//ele sempre pegará o this do main que é 1818 ao invés de ser o randomico do LateBloomer.
this.petalCount = 1818;

function LateBloomer() {
    this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

//Declare bloom depois de um intervalo de 1 segundo;
LateBloomer.prototype.bloom = function() {
    window.setTimeout(this.declare.bind(this), 1000);
}

LateBloomer.prototype.declare = function() {
    console.log('I am a beatiful flower with ' + this.petalCount + ' petals!');
}

var flower = new LateBloomer();
flower.bloom();
*/
/*
function imprimeArgumentsWithoutHave() {
    console.log(arguments[0].toLowerCase());
}


imprimeArgumentsWithoutHave("Josiemerson");
*/
/*
const module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  
  const unboundGetX = module.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // expected output: undefined
  
  const boundGetY = module.getX.bind(module);
  console.log(boundGetY());
  */
/*var lista = ["maça", "pera", "laranja"];
lista.push("uva");
console.log(lista);
lista.pop()
console.log(lista.toString());
console.log(lista.reverse());
console.log(lista.join(" - "))//laranja - pera - maça

var fruta = {nome: "maçã", cor: "vermelha"};
console.log(fruta.nome);
console.log(fruta.cor);

var frutas = [];
frutas.push(fruta);
console.log(frutas);

function teste() {
    var nome = "Josiemerson";
}
alert(nome);*/
