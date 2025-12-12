//dom é a arvore/fluxo do meu documento HTML
//ele serve para que o js consiga manipular (visualizar, editar, criar e excluir)
//O DOM ele torna os elementos html em objetos para que o JS consiga acessar de fato

let elementoBody = document.getElementsByTagName("body");

console. log(elementoBody);

//acessar pela tag h1

let elementoH1 = document.getElementsByTagName("h1")

console.log(elementoH1[0].textContent);

////////----------

let elementoLeandra = document.getElementById("tecnica")
console.log(elementoLeandra)

////----------------

let jogadoresTorloni = document.getElementsByClassName("jogador")
console.log(jogadoresTorloni)

////----------

let elementosJogadores = document.getElementsByClassName("jogador")
console.log(elementosJogadores[3])

/////-----

// let exibeClass = document.getElementsByClassName("jogador")
// console.log(exibeClass[3].textContent = "Leandra")

/////////////////////////////////

elementoLeandra.style.color = "red";
elementoLeandra.style.fontSize = "50px";

/////------

jogadoresTorloni[3].style.color = "red";