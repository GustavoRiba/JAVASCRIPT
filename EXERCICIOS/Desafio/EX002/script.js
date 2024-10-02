function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
if (fano.value.lenght == 0 || Number(fano.value) > ano) {
    window.alert('Verifique os dados e tente novamente!')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >=0 && idade < 10) {
            // criança
            img.setAttribute('src', 'bebe-menino.png')
        } else if (idade >=10 && idade < 21) {
            // jovem
            img.setAttribute('src', 'jovem-homem.png')
        } else if (idade < 50) {
            // adulto
            img.setAttribute('src', 'homem-adulto.png')
        } else {
            // velho
            img.setAttribute('src', 'homem-velho.png') 
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >=0 && idade < 10) {
            // criança
            img.setAttribute('src', 'bebe-menina.png')
        } else if (idade >=10 && idade < 21) {
            // jovem
            img.setAttribute('src', 'jovem-mulher.png')
        } else if (idade < 50) {
            // adulto
            img.setAttribute('src', 'mulher-adulta.png')
        } else {
            // velho 
            img.setAttribute('src', 'mulher-velha.png')
        } 
    }
    res.style.textAlign = 'center'
    res.innerHTML = `É ${genero} com ${idade} anos`
    res.appendChild(img)
}
}