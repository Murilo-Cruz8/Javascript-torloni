
let idade = parseInt(prompt("Digite sua idade:"));

while (idade < 18) {
  idade = parseInt(prompt("Você é menor de idade, não poderá entrar no site. Digite sua idade novamente:"));
  console.log(idade);
  
}
if (idade >= 18) {
  alert("Você é maior de idade!");
  
}

console.log("Seu acesso foi liberado! Você é maior de idade.")
