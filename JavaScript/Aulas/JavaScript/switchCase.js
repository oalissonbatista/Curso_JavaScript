var agora = new Date()
var diaSem = agora.getDay

switch (diaSem) { 
    case 0:
        diaSem = 'Domingo'
        break
    case 1:
        diaSem = 'Segunda-feira'
        break
    case 2:
        diaSem = 'Terça-feira'
        break
    case 3:
        diaSem = 'Quarta-feira'
        break
    case 4:
        diaSem = 'Quinta-feira'
        break
    case 5:
        diaSem = 'Sexta-feira'
        break
    case 6:
        diaSem = 'Sabado'
        break
    default:
        diaSem='Dia inválido'
}
console.log(diaSem)


