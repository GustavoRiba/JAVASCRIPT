/*let num = [5, 8, 2, 9, 3]
num.push(7)
console.log(`Nosso vetor é o ${num[5]}`)
console.log(num.length)
console.log(num.sort())*/

let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
/*for(let pos = 0; pos<valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log(valores.indexOf())