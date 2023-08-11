function verificar() {
    var fano = document.getElementById('ano')
    var msg = document.getElementById('resultado')
    var sexoMasc = document.getElementById('masc')
    var sexoFem = document.getElementById('fem')
    var agora = new Date()
    var anoagora = agora.getFullYear()
    var ano = Number(fano.value)
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    var idade = anoagora - ano
    if (ano == 0 || ano == null || ano > anoagora || ano < 1900 || (sexoFem.checked == false && sexoMasc.checked == false)) {
        window.alert('[ERRO] Revise os dados inseridos')
    } else {
        if (sexoFem.checked) {
            var sexo = 'mulher'
            if (ano >= 2009) {
                img.setAttribute('src', 'imagens/crianca-f.jpg')
            } else if (ano < 2009 && ano >= 1990) {
                img.setAttribute('src', 'imagens/jovem-f.jpg')
            } else if (ano < 1999 && ano >= 1970) {
                img.setAttribute('src', 'imagens/adulto-f.jpg')
            } else {
                img.setAttribute('src', 'imagens/idoso-f.jpg')
            }
        } else if (sexoMasc.checked) {
            var sexo = 'homem'
            if (ano >= 2009) {
                img.setAttribute('src', 'imagens/crianca-m.jpg')
            } else if (ano < 2009 && ano >= 1990) {
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            } else if (ano < 1999 && ano >= 1970) {
                img.setAttribute('src', 'imagens/adulto-m.jpg')
            } else {
                img.setAttribute('src', 'imagens/idoso-m.jpg')
            }
        }
        msg.style.textAlign = 'center'
        msg.innerHTML = `Detectamos ${sexo} com ${idade} anos`
        msg.appendChild(img)
    }
    
}  

    

