//Tipos de Datos primitivos:

//cadena de texto (String)
let name = "Julian Rosemebrg"
let alias = "JulianDev"
let mail = "julianrosemberg2@gmai.com"
console.log(name, alias, mail)

//numericos (number)
let age = 29 //entero
let altura = 1.77 //decimal

//booleanos (boolean)
let isTeacher = true
let isStudent = false

//undefined
let undeFinedValue
console.log(undeFinedValue)

//null
let nullValue = null

//Symbol
let mySymbol = Symbol("mysymbol")


//BigInt

let myBigInt = BigInt(678687687876867867867867867867867867867876867)
let myBigInt2 = 678687687876867867867867867867867867867876867n

//Mostramos los tipos de datos
console.log(typeof name)
console.log(typeof age)
console.log(typeof isTeacher)
console.log(typeof undeFinedValue)
console.log(typeof nullValue) //Un tipo de dato primitivo que si se asigna a -
console.log(typeof mySymbol) //una variable se tomo como obj aunque null como tal es primitivo
console.log(typeof myBigInt)