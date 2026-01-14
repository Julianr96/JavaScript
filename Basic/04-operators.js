//Operadores: 

//eradores aritmeticos:
let a = 3
let b = 7

console.log(5 + 10) // suma

console.log(a + b) // suma
console.log(a - b) // resta
console.log(a * b) // multiplicacion
console.log(a / b) // division

console.log(a % b) // modulo
console.log(a ** b) // exponente

a++, b-- // incremento y decremento
console.log(a) 
console.log(b)

//Operadores de asignacion

let myVariable = 2
console.log(myVariable)
myVariable += 2 // myVariable = myVariable + 2
console.log(myVariable)
myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

//Operadores de comparacion
console.log(a)

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == a)
console.log(a == 4) //igualdad por valor
console.log(a == "4") //igualdad por valor
console.log(a === a) //igualdad por identidar (por tipo y valor)
console.log(a === 4) //hay igualdad por valor y tipo
console.log(a === "4") //no hay igualdad en tipo
console.log(a != 4)
console.log(a !== "4") // Es a distinto de identidad que "4"? True
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == '')
console.log(0 == ' ')
console.log(0 == "Hola")
console.log(0 === "Hola")
console.log(undefined == null)
console.log(undefined === null)

//Trutht value (valores verdaderos)
//Todos los numeros positivos y negativos menos cero
//Todas las cadenas de texto menos las vacias
//El boolean true

//Falsy values (valores falsos)

// 0
// 0n (bigInt)
// null
// undefined
// Nan
// El boolean false
// Cadena de texto vacias



//Operadores logicos
console.log("Ahora operadores logicos: ")

// and (&&)
console.log("Es 5 > 10 && 15 > 20: ", 5 > 10 && 15 > 20)
console.log("Es 5 < 10 && 15 < 20: ", 5 < 10 && 15 < 20)
console.log("5 < 10 && 15 > 20: ", 5 < 10 && 15 > 20) //se pueden anidar condiciones de manera infinita

//or (//)
console.log("Es 5 > 10 || 15 > 20: ", 5 > 10 || 15 > 20)
console.log("Es 5 < 10 || 15 < 20: ", 5 < 10 || 15 < 20)
console.log("5 < 10 || 15 > 20: ", 5 < 10 || 15 > 20)

console.log("5 > 10 && 15 > 20 || 30 > 40: ", 5 > 10 && 15 > 20 || 30 < 40)

//not (!)
console.log("Es !(5 > 10 && 15 > 20): ", !(5 > 10 && 15 > 20))
console.log("Es !(5 > 10 || 15 > 20): ", !(5 > 10 || 15 > 20))

//Operadores ternarios

const isRaining = true

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")// ? : 