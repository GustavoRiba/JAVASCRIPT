function carregar(){
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA! 
        img.src = 'file.png'
        document.body.style.background = 'lightblue'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'file (1).png'
        document.body.style.background = '#e2cd9f'
    } else {
        // BOA NOITE!
        img.src = 'file (2).png'
        document.body.style.background = 'midnightblue'
    }
}