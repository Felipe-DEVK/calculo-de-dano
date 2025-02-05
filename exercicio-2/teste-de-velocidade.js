const veiculo1 = prompt("Insira o nome do Primeiro Veiculo:")
const velocidade1 = parseFloat(prompt("Insira a Velocidade do Veiculo 1:"))
const veiculo2 = prompt("Insira o nome do Segundo Veiculo:")
const velocidade2 = parseFloat(prompt("Insira a Velocidade do Veiculo 2:"))

if(velocidade1 > velocidade2){
    alert("O Veiculo: " + veiculo1 + " Foi mais rapido")
} else if (velocidade2 > velocidade1) {
    alert("O Veiculo: " + veiculo2 + " Foi mais rapido")
} else {
    alert("A velocidade do " + veiculo1 + " e " + veiculo2 + "São Iguais")
}