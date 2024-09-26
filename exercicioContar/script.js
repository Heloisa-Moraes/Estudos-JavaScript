function contar(){
  let inicio = document.getElementById('num1')
  let fim = document.getElementById('num2')
  let txtpasso = document.getElementById('passo')
  let res = document.getElementById ('res')


if (inicio.value.length == 0 || fim.value.length == 0 || txtpasso.value.length == 0 ) {
  window.alert('Erro! Você não digitou os dados')
  
} else {
   res.innerHTML = 'Contando: <br>'
   let i = Number(inicio.value)
   let f = Number(fim.value)
   let p = Number(txtpasso.value)
   if (p <=0) {
    window.alert('passo invalido! Considerando passo 1')
    p = 1
   }

  if (i <f) {
    //contagem crescente
    for (let c = i; c <= f; c+= p){
    res.innerHTML +=  ` ${c}  \u{1F449}`
  }
  } else {
    //contagem regressiva
    for (let c = i; c >= f; c -=p) {
      res.innerHTML += `${c} \u{1F449}`
    }
  }
  res.innerHTML += `\u{1F449}`
}
}