let pontosJogador = 0
let pontosComputador = 0

function jogar(escolhaUsuario){

    let opcoes = ["pedra", "papel", "tesoura"]

    let escolhaComputador = opcoes[Math.floor(Math.random() * 3)]

    let resultado = ""

    if(escolhaUsuario === escolhaComputador){
        resultado = "🤝 Empate!"
    }

    else if(
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
    ){
        resultado = "🎉 Você ganhou!"
        pontosJogador++
    }
   
    else{
        resultado = "💻 Computador ganhou!"
        pontosComputador++
    }

    document.getElementById("escolhaJogador").innerText = "👨‍🦰 Você escolheu: " + escolhaUsuario

    document.getElementById("escolhaComputador").innerText = "💻 Computador escolheu: " +escolhaComputador

    document.getElementById("resultado").innerText = resultado

    document.getElementById("pontosJogador").innerText = pontosJogador

    document.getElementById("pontosComputador").innerText = pontosComputador
    
}