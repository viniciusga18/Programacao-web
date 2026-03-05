//alert("Teste")

// variaveis:
var animal = "gato"
console.log(animal)

let nomeCompleto = "Fulano da Silva"
console.log(nomeCompleto)

var valor0 = 2
const valor1 = 10
console.log(valor1)
valor0 = 3 // permite reatribuiçao pois e do tipo var ou let
//valor1 = 30 como e uma constante mao permite restribuiçao

//verificar o tipo da variavel
console.log(typeof valor0)

//impressao
//console.log
// template literal
console.log(`Seja bem-vindo ${nomeCompleto}. Aproveite a estadia!`)

//algoritimo: entrada + preocessamento + saldo
//entrada de dados
var nome = window.prompt("Digite seu nome: ")
//saida de dados
document.writeln(`Seja bem-vindo ${nome}. Aproveite a estadia!`)

//operadores aritimeticos
// + - * / **

//operadores de comparaçao
//< > != == === !==
console.log(5 =='5') //olha apenas para valores OU - LOGICO
console.log(5 === '5') // olha para tipo e valor E - LOGICO &&

//criar um sistema que realize a soma de dois numeros
//o usuario deve informar quais sao os numeros
//resultado na tela
var n1 = parseFloat(window.prompt("Valor 1: "))
console.log(typeof n1)
var n2 = parseFloat(window.prompt("Valor 2: "))
var resultado = n1 + n2
document.writeln(`resultado  ${resultado}`)

//estrutura de controle (if-else)
 if (resultado >=18) {
    console.log("maior de idade")
 } else { 
    console.log("menor de idade")
 }

 //estrutura de repeticao: for, while e do-while
 for (let i=0; i<10;i++){
    console.log("interacao: " + i)
 }
 let i = 1
 while(i<5){
    console.log("interacao: " + i)
    i++
 }

 //escolha-caso
 var diaSemana = 3
 switch (diaSemana) {
    case 1:
        console.log("Domingo")
        break
     case 2:
         console.log("Segunda-Feira")
         break
     default:
         console.log("Escolha uma opcao")
 }