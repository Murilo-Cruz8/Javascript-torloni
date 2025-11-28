let frutas = ["Morango","Melancia","Uva","Pera"];

console.log("A lista de fruta tem " + frutas.length + " itens.")

console.log("A primeira fruta é a : " + frutas[0]);

console.log("O item 4 da minha lista é: " + frutas[3]);

console.log(frutas);

for(let i =0; i <= frutas.length; i++){
console.log(frutas[i]);
}

// crie uma lista de tarefas, conteudo no max 10 itens e exiba cada tarefa

let tarefasMercado = ["Arroz", "Feijão", "Pão"];

console.log("A lista de tarefa do mercado tem " + tarefasMercado.length + " itens." );

tarefasMercado.forEach((frutas) => {
    console.log(frutas)
})
