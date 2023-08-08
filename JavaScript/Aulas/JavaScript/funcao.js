var e = 1
var f = 12
somar(e, f)
parimp(e)             //chamando a função
var res = parimp(12)  //Outra maneira de chamar funcao 
console.log(parimp(7)) //outra maneira


function somar(n1,n2) {
    var s = n1 + n2
    Number(s)
    imprimir(s)
}
function somar2(n1, n2) {    //outra forma da função
    return n1+n2
}
function imprimir(s) { 
    console.log(s)
}
function parimp(n) { 
    if (n % 2 == 0) {
        console.log(`${n} é par`)
    } else { 
        console.log(`${n} é ímpar`)
    }
}
