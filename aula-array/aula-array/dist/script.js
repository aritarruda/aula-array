//criando array
const frutas= ["maçã","caju","morango","manga","banana"]
console.log(frutas.length)

//acessando itens
frutas.forEach(function(item,indice,array){
  console.log(indice)
})

//acessar item
const primeiro = frutas[0]
console.log(primeiro)
console.log(frutas.length)
const ultimo=frutas[frutas.length-1]
console.log(ultimo)

//inserindo elementos
const adicionar= frutas.push("laranja")
console.log(frutas)
frutas.splice(1,0,"uva")
console.log(frutas)
const fim=frutas.pop()
console.log(frutas)