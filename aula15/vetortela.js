let num = [8, 1, 7, 4, 2 ,0]

/*console.log(valores)

for (let pos =0; pos < valores.length; pos ++) {
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for (let pos in num) {
    console.log (`A posição ${pos} tem o valor ${num[pos]}`)
}


let pos = num.indexOf(2)
console.log(`o valor  está na posição ${pos}`)