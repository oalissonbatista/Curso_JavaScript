/*var idade = 67
console.log(`Voce tem ${idade} anos`)
if (idade < 16) {
    console.log('Voce não vota.')
} else if (idade < 18 || idade >65) {
    console.log('Seu voto é opcional.')
    
} else { 
    console.log('seu voto é obrigatorio.')
}*/

var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var segundos = agora.getSeconds()
console.log(`Agora são exatamente ${hora} horas, ${minuto} minutos e ${segundos} segundos `)

