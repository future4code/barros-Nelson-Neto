/* ----------------------- Exercício interpretação ----------------------

01)

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
// a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
// b. false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
// c. true

console.log("d. ", typeof resultado)
// d. boolean



let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = (primeiroNumero + segundoNumero)

console.log (soma)*/

// 02) O problema com o código é que o comando prompt sempre retorna
// uma string, então deve-se converter para number, as duas variáveis.

/*let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = (primeiroNumero) + (segundoNumero)

console.log(soma)*/
// 03) Código consertado.

/* ------------------------------ Exercícios Código ------------------------------------------------

01) 

let idadeUsuario = Number(prompt("Qual a sua idade"))
let idadeMelhoramigo = Number(prompt("qual a idade do seu melhor(a) amigo(a)"))
console.log = ("Sua idade é maior do que a do seu melhor amigo", idadeUsuario > idadeMelhoramigo) 
let diferençaDeIdade2 = idadeUsuario - idadeMelhoramigo

console.log ( diferençaDeIdade2)*/

 02)


let numeroPar = Number(prompt("Insira um número par"))
let restoDiv = numeroPar % 2

//C. Todos os restos retornam zero, pois a divisão de todo numero par 
//por dois não tem resto.

//D. Se escrever algum número impar os restos vem em diferentes números.*/
//console.log (restoDiv)

 03 

let idadeDoUsuario = Number(prompt("Qual sua idade em anos"))
let idadeMeses = idadeDoUsuario * 12
let idadeDias = idadeDoUsuario * 365
let idadeHoras = idadeDias * 24

console.log(idadeMeses, idadeDias, idadeHoras)*/

04

let primeiroNumero = Number(prompt("Digite Um Número"))
let segundoNumero = Number(prompt("Digite outro Número"))

let resultado = primeiroNumero > segundoNumero 
console.log ("O primeiro numero é maior que o segundo?",resultado)

let resultado2 = primeiroNumero == segundoNumero
console.log ("O primeiro número é igual ao segundo?",resultado2 )

console.log("O primeiro número é divisível pelo segundo?", (primeiroNumero%segundoNumero)===0)

console.log("O segundo número é divisível pelo primeiro?",(segundoNumero%primeiroNumero)===0)


/*O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações.*/


