// 1. Escribe un comentario en una linea (hecho)
/* 2. Escribe un comentario
en varias lineas (hecho)*/
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let apellido = "Rosemberg"
let medidaBiceps = 39
let is40cm = false
let unDefinedValue
let nullValue = null
let aSymbol = Symbol("asymbol")
let aBigInt = BigInt(999999999999999999999999999)

//Imprime en consola el valor de todas las variables

console.log("Los valores de las variables: ")

console.log(apellido)
console.log(medidaBiceps,"cm")
console.log(is40cm)
console.log(unDefinedValue)
console.log(nullValue)
console.log(aSymbol)
console.log(aBigInt)

//Imprime en consola el tipo de todas las variables

console.log("Los tipos de dato de cada variable: ")

console.log(typeof apellido)
console.log(typeof medidaBiceps)
console.log(typeof is40cm)
console.log(typeof unDefinedValue)
console.log(typeof nullValue)
console.log(typeof aSymbol)
console.log(typeof aBigInt)

//Modifica el valor de las variables por otros del mismo tipo

apellido = "Rosenberg"
medidaBiceps = 43
is40cm = true
unDefinedValue = 5
nullValue = "Bomboclat"
aSymbol = Symbol("asymbol2")
aBigInt = BigInt(999999999999999999999999998)

//muestro en consola

console.log(apellido, medidaBiceps, is40cm, unDefinedValue, nullValue, aSymbol, aBigInt)

//Modifico los valores de las variables a otro tipo de dato

apellido = 9
medidaBiceps = "cuarenta y tres"
is40cm = "verdad"
unDefinedValue = "cinco"
nullValue = "MiBombo!"
aSymbol = 3
aBigInt = 4

//muestro en consola nuevamente

console.log("Muestro despues de cambiar todos los tipos de variables: ")

console.log(apellido, medidaBiceps, is40cm, unDefinedValue, nullValue, aSymbol, aBigInt)

//Declarar constantes con valores asociados a todos los tipos de datos primitivos

const apellido_const = "Rose"
const medidaBiceps_const = 39.5
const is40cm_const = false
const unDefinedValue_const = null
const nullValue_const = null
const aSymbol_const = Symbol("asymbo3")
const aBigInt_const = BigInt(999999999999999999999999997)

//Modificamos el valor de las constantes

apellido_const = "Rosem"
medidaBiceps_const = 40
is40cm_const = true
unDefinedValue_const = 1
nullValue_const = 2
aSymbol_const = 3
aBigInt_const = 4

//Muestro en consola las const cambiadas: 

console.log("Muestro despues de cambiar todos los tipos de variables: ")

console.log(apellido_const, medidaBiceps_const, is40cm_const, unDefinedValue_const, nullValue_const, aSymbol_const, aBigInt_const)

//Tira error en la const unDeFinedValue_const (trato de arreglar). 
// Despues cuando quiero tirar en consola los valores de constantes
// me sale solo el apellido_const y luego lo demas falla.