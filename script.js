// Prática guiada


/*const arrayString = ["banana", "mamão", "amora"]
const arrayNumber = [1, 2, 3]
const arraySortido = ["banana", 22, true]
const arrayNum = [23]
const arrayVazio = []


console.log(arrayString.length)
console.log(arrayString)

const nome = "Arthur"

console.log("lenght do nome", nome.length)
console.log("lenght do nome", nome[1])
//posição de cada elemento
console.log(arrayString[1])

// .includes()

console.log(arraySortido.includes(12))
console.log(arraySortido.includes("banana"))
console.log(arraySortido.includes("maca"))
console.log(arraySortido.includes(true))


console.log(arrayNum)
console.log(arrayNum[0])
console.log(arrayNum.length)

console.log(arrayVazio)
console.log(arrayVazio.length)


const copiaArrayString = arrayString.slice()

console.log("Copia",copiaArrayString)
console.log("Original",arrayString)

copiaArrayString.push("Nova String")
console.log(copiaArrayString)

console.log(arrayString)
arrayString.push("maca")
console.log(arrayString)

console.log("copia", copiaArrayString)

//console.log(copiaArrayString.pop())
//console.log(copiaArrayString)

copiaArrayString.splice(1, 2)
console.log(copiaArrayString)


copiaArrayString.sort()
console.log(copiaArrayString)

console.log(arrayNumber)
arrayNumber.sort()
console.log(arrayNumber)*/

// Exercicio

const arrayNumeros = [3, 5, 2, 8]
const copiaArrayNumeros = arrayNumeros.slice()

copiaArrayNumeros.pop()
copiaArrayNumeros.push(6)
copiaArrayNumeros.splice(2, 1)

console.log("Original",arrayNumeros)
console.log("Copia", copiaArrayNumeros)