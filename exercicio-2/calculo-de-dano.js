const atacante = prompt("Insira o Nome do Personagem Atacante:")
const poderDeAtaque = parseFloat(prompt("Insira o poder de Ataque do " + atacante))
const defensor = prompt("Insira o Nome do Personagem Defensor:")
let pontosDeVida = parseFloat(prompt("Quantos Pontos de Vida tem o Personagem?"))
const poderDeDefesa = parseFloat(prompt("Insira o Poder de Defesa do Personagem Defensor"))
const escudo = prompt("Ele Possui um Escudo ? (Sim/Não)")

let danoCausado = 0


if(poderDeAtaque > poderDeDefesa && escudo === "Não"){
    danoCausado = poderDeAtaque - poderDeDefesa
} else if(poderDeAtaque > poderDeDefesa && escudo === "Sim"){
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)

alert(
    atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
    defensor + "\nPontos de Vida: " + pontosDeVida +
    "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + escudo
)