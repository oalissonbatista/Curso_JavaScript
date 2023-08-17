function tabuada() { 
    var numero = document.getElementById('num')
    var tab = document.getElementById('selectab')
    if (numero.value.length == 0) {
        window.alert('Numero inválido.')
    } else { 
        var num = Number(numero.value)
        tab.innerHTML = ''
        tab.size = 10
        for (var i = 1; i <= 10; i++) { 
            let item = document.createElement('option')
            item.text = `${num} x ${i} = ${num * i}`
            item.value = `tab${i}` //bom para saber o item selecionado
            tab.appendChild(item)
        }
    }
    
    
}