let amigo = {nome:'Jose',
sexo: 'M', 
peso: 85,
engordar(p){
    console.log('José engordou...')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)