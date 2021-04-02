var primeiroValor = parseInt(prompt("Insira o primeiro valor:"))
if (isNaN(primeiroValor)) {
  primeiroValor = parseInt(prompt("Favor inserir somente números:"))
}
var segundoValor = parseInt(prompt("Insira o segundo valor:"))
if (isNaN(segundoValor)) {
  segundoValor = parseInt(prompt("Favor inserir somente números:"))
}
var tipoOperação = prompt("Insira o tipo de operação: +, -, * ou /")

if (tipoOperação == "*") {
var resultado = primeiroValor * segundoValor
document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")
} else if (tipoOperação == "+") {
var resultado = primeiroValor + segundoValor
document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
} else if (tipoOperação == "-") {
var resultado = primeiroValor - segundoValor
document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>") 
} else if (tipoOperação == "/") {
var resultado = primeiroValor / segundoValor
document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>") 
} else {
document.write("<h2>Opção inválida</h2>")
}

