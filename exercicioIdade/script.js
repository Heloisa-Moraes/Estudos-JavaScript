function verificar(){
  var data = new Date ()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')

  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('ERRO! verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
        genero = 'Homem'
       if(idade >=0 && idade <10) {
          //criança
          img.setAttribute('src', 'img/meninocriança.png')
        } else if ( idade <21) {
          //jovem
          img.setAttribute('src', 'img/menino.png')
        } else if (idade < 50) {
          //adulto
          img.setAttribute('src', 'img/homem.png')
        } else {
          //idoso
          img.setAttribute('src', 'img/idoso.png')
        }
    } else if (fsex[1].checked) {
        genero = "Mulher"
        if(idade >=0 && idade <10) {
          img.setAttribute('src', 'img/criançamenina.png')
          //criança
        } else if ( idade <21) {
          img.setAttribute('src', 'img/menina.png')
          //jovem
        } else if (idade <50) {
          img.setAttribute('src', 'img/mulher.png')
          //adulto
        } else {
          //idoso
          img.setAttribute('src', 'img/idosa.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }
}

