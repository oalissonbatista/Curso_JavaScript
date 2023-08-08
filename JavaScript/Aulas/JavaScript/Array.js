var a = [8,6,5,7,4]
/*console.log(`Nosso vetor é o ${a}`)
a[0] = 3
a.push(9)     //acrescenta um valor ao final do array
a.length      // tamanho do vetor      
console.log(`Nosso novo vetor é o ${a}`)
console.log(`O tamanho do vetor é ${a.length}`)
a.sort()      // ordena em ordem crescente
console.log(`o Vetor ordenado: ${a.sort()}`)*/

/*for (var i = 0; i < a.length; i++) { 
    console.log(a[i] )
}*/
for (var i in a) {       // para arrays e objetos
    console.log(a[i])   
}

//busca


console.log(a.indexOf(10))
