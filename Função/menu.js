//1
function pesoAltura() {
    function calcularIMC(peso,altura){

let imc = peso / (altura * altura)

let classificacao = "";

if (imc < 18.5){
    classificacao = "Abaixo do peso";
} else if (imc >= 18.5 && imc <= 24.9){
    classificacao = "Peso normal";
} else if (imc >= 25.0 && imc <= 29.9){
    classificacao = "Sobrepeso";
} else if (imc >= 30.0 && imc <= 34.9){
    classificacao = "Obesidade grau 01";
} else if (imc >= 35.0 && imc <= 39.9){
    classificacao = "Obesidade grau 02";
} else {
    classificacao = "Obesidade grau 03";
}

alert(`Seu IMC é: ${imc.toFixed(2)}\nclassificação: ${classificacao}`);
console.log(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
}

let peso = parseFloat(prompt("Fale aqui seu peso em kg:"));
let altura = parseFloat(prompt("Fale aqui sua altura em metros:"))

}

//2
function tabuadaEscolhida() {
    function exibirTabuadaEscolhida() {
    let exibirTabuadaEscolhida = parseInt(prompt("Digite um numero da tabuada desejada: "));

    console.log(`=====TABUADA ${exibirTabuadaEscolhida}=======`)

    for (let i =1; i <= 10; i ++) {
        console.log(exibirTabuadaEscolhida)
    }
}

function exibirNomeSolicitado() {
    let exibirNomeSolicitado = prompt("Digite seu nome");

    return exibirNomeSolicitado;
}

let nome = exibirNomeSolicitado();
alert(nome);

function somarDoisNumeros(numero1, numero1) {
    console.log(numero1+numero2)
}

somarDoisNumeros(10,10);
}

//3
function escrevaNumeros() {
    let n1 = parseFloat(prompt("Escreva seu primeiro numero"))
let n2 = parseFloat(prompt("Escreva seu segundo numero"))
let n3 = parseFloat(prompt("Escreva seu terceiro numero"))

if(n1 < n2 && n2 < n3){
    alert("Os números estão em ordem crescente.");
}else {
    alert("Os números não estão em ordem crescente.")
}
}

//4
function escolhaNumeroPares() {
    let numero = parseInt(prompt("Digite algum número"))


if (numero %2 === 0){
    console.log("4 é numero par")
}

else{
    console.log("5 é numero impar")
}
}

//5
function ordensAleatorias() {
    let primeiroNumero = parseInt(prompt("Escreva o primeiro número"));
let segundoNumero = parseInt(prompt("escreva o segundo número"));
let terceiroNumero = parseInt(prompt("escreva o terceiro número"));

if (primeiroNumero < segundoNumero && segundoNumero < terceiroNumero ){
    alert("Está em ordem crescente.");
}

if(terceiroNumero < segundoNumero && segundoNumero < primeiroNumero){
    alert("Está em ordem decrescente")
}

else if(primeiroNumero < segundoNumero && segundoNumero >= terceiroNumero){
    alert("Está em ordem aleatória")
}
}