// let usuario = prompt("digite o nome de usuario");
// let senha = prompt("digite a senha");

// if (usuario == "admin") {
//     alert("Login bem-sucedido! Bem vindo.");
// } else

//     if ( senha == "senha123") {
//         alert ("Login falhou! Usuario ou senha incorretos.")
//     }

// ------------exercicio 02------------------

// let numero = parseInt(prompt("Digite um número de 1 a 7 referente ao dia da semana:"));

// switch (numero) {
//     case 1:
//         console.log("Segunda-feira");
//         break;
//     case 2:
//         console.log("Terça-feira");
//         break;
//     case 3:
//         console.log("Quarta-feira");
//         break;
//     case 4:
//         console.log("Quinta-feira");
//         break;
//     case 5:
//         console.log("Sexta-feira");
//         break;
//     case 6:
//         console.log("Sábado");
//         break;
//     case 7:
//         console.log("Domingo");
//         break;
//     default:
//         console.log("Número inválido! Digite um valor de 1 a 7.");
// }

// ------------exercicio 03-------------------

// let numero = parseInt(prompt("Digite algum número"))

// if (numero %2 === 0){
//     console.log("4 é numero par")
// }

// else{
//     console.log("5 é numero impar")
// }

// ------------exercicio 04---------------------


// function verificarSituacaoAluno() {
    
//     let nota1 = parseFloat(prompt("Digite a primeira nota:"));
//     let nota2 = parseFloat(prompt("Digite a segunda nota:"));
//     let nota3 = parseFloat(prompt("Digite a terceira nota:"));
//     let nota4 = parseFloat(prompt("Digite a quarta nota:"));
    
    
//     let media = (nota1 + nota2 + nota3 + nota4) / 4;
    
    
//     console.log("Média do aluno: " + media.toFixed(2));
    
    
//     if (media >= 7.0) {
//         console.log("Situação: APROVADO");
//     } else if (media >= 5.0) {
//         console.log("Situação: RECUPERAÇÃO");
//     } else {
//         console.log("Situação: REPROVADO");
//     }
// }


// verificarSituacaoAluno();

// ------------exercicio 05---------------------

// let n1 = parseFloat(prompt("Escreva seu primeiro numero"))
// let n2 = parseFloat(prompt("Escreva seu segundo numero"))
// let n3 = parseFloat(prompt("Escreva seu terceiro numero"))

// if(n1 < n2 && n2 < n3){
//     alert("Os números estão em ordem crescente.");
// }else {
//     alert("Os números não estão em ordem crescente.")
// }

// -------------exercicio 07-------------------

// let valorCompra = parseFloat(prompt("coloque o valor total da compra:"));

// let valorFinal;

// if (valorCompra <= 100) {
//     valorFinal = valorCompra; // Sem desconto
// } else if (valorCompra <= 200) {
//     valorFinal = valorCompra * 0.90; // 10% de desconto
// } else {
//     valorFinal = valorCompra * 0.80; // 20% de desconto
// }

// alert("Valor final da compra: R$ " + valorFinal.toFixed(2));

// --------------exercicio 08---------------------

let peso = parseFloat(prompt("Fale aqui seu peso em kg:"));
let altura = parseFloat(prompt("Fale aqui sua altura em metros:"))

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


// -------------------- Desafio da alexia ---------------------------

// let primeiroNumero = parseInt(prompt("Escreva o primeiro número"));
// let segundoNumero = parseInt(prompt("escreva o segundo número"));
// let terceiroNumero = parseInt(prompt("escreva o terceiro número"));

// if (primeiroNumero < segundoNumero && segundoNumero < terceiroNumero ){
//     alert("Está em ordem crescente.");
// }

// if(terceiroNumero < segundoNumero && segundoNumero < primeiroNumero){
//     alert("Está em ordem decrescente")
// }

// else if(primeiroNumero < segundoNumero && segundoNumero >= terceiroNumero){
//     alert("Está em ordem aleatória")
// }









