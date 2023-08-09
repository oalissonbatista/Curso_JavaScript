function carregar() { 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var corpo = document.getElementById('body')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 6 && hora < 12) {
        img.src = 'imagens/manha.jpg'
        corpo.style.background = '#468eec'
        
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.jpg'
        corpo.style.background = '#eea51cdc'
    } else { 
        img.src = 'imagens/noite.jpg'
        corpo.style.background = '#1e1e1e'
    }

    


}

