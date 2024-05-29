alert('olá bem vindo jogadores');
let númeroMáximo = parseInt(prompt('digite o máximo'))
let numeroSecreto = parseInt(Math.random() * númeroMáximo+1)
console.log(numeroSecreto)
let chute
let tentativas = 0

while (numeroSecreto != chute){
    chute = prompt(`digite um número entre 1 e ${númeroMáximo}`)
    if (numeroSecreto == chute) {
        break
        
    }
    else {
        if (numeroSecreto  > chute) {alert(`o número secreto é maior que o chute ${chute}`)}
        else {alert(`o número secreto é menor que o chute`)}
        tentativas++
    }}

//operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`isso aí você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`)