function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours()
    var minuto = data.getMinutes()
  
  
    msg.innerHTML = `Agora são: ${hora} horas e ${minuto} minutos`
    if (hora >= 0 && hora <12) {
        //bom dia
        img.src = 'img/manha.png'
        document.body.style.background = '#FFBE63';
        
    } else if (hora >= 12 && hora <18) {
        //boa tarde! 
        img.src = 'img/tarde.png'
        document.body.style.background = '#3C5C42';
    } else {
        //boa noite 
        img.src = 'img/noite.png'
        document.body.style.background = '#002B5C';
    }
}

