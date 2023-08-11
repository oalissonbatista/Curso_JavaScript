function contar() { 
    var inicio = document.getElementById('inicio')

    var fim = document.getElementById('fim')

    var passo = document.getElementById('passo')

    var res = document.getElementById('resultado')
    var i = Number(inicio.value)


    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length==0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[Erro] Faltam dados')
        
    } else {
        res.innerHTML = `Contando...<br>`
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) { 
            window.alert('Passo invalido. Considerando passo 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            while (i <= f) {
                res.innerHTML += `${i} 👉 `
                i += p
            }
            res.innerHTML += `🏁`
        } else { 
            //contagem decrescente
            while (i >= f) {
                res.innerHTML += `${i} 👉 `
                i -= p
            }
            res.innerHTML += `🏁`
        }
        
    }
}
    


    

