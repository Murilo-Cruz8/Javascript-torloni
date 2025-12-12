//eventos sao interaçoes do usuario com o website e também
//comportamentos do website, por exemplo carregar a tela

let elementoBtn = document.getElementById("btn");
let elementoIdElemento = document.getElementById("tecnica")
let novoElemento = document.createElement("a")
novoElemento.textContent = "Stranger things";
novoElemento.href = "https://www.youtube.com/watch?v=Wb3kaP580kA";

elementoBtn.addEventListener("click", () => {
    // alert("Você acabou de clicar no botão!")

    // elementoBtn.style.backgroundColor = "#ffb340";
document.body.appendChild(novoElemento)
// document.body.removeChild(elementoIdLeandra)
console.log(document.body.children);

})
