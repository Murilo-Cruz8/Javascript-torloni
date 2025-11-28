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