// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
console.log("Punto 1: ")

let miNombre = "Julian"

if(miNombre === "Julian"){
    console.log(miNombre)
}else{
    console.log("Quien eres?")
}

console.log("---------------")
// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos
console.log("Punto 2: ")

let usuario1 = "Burger Kang"
let passwordUsuario1 = "Contraseña1$"

if(usuario1 === "Burger Kang" && passwordUsuario1 === "Contraseña1$"){
    console.log(`Bienvenido, ${usuario1}.`)
}else{
    console.log("El usuario o contraseña son incorrectos, pruebe nuevamente")
}

console.log("---------------")
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
console.log("Punto 3: ")

let valor = Math.floor(Math.random() * 10)
let signo = Math.random() < 0.5 ? -1 : 1
let num1 = valor * signo

if(num1 > 0){
    console.log(`${num1} es un numero positivo.`)
}else if(num1 < 0){
    console.log(`${num1} es un numero negativo.`)
}else{
    console.log(`${num1} es cero.`)
}

console.log("---------------")
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
console.log("Punto 4: ")

let edad = 15
let mayoriaDeEdad = 18
let cuantoFalta = null

if(edad >= 18){
    console.log(`Es mayor de edad.`)
}else{
    cuantoFalta = mayoriaDeEdad - edad
    console.log(`No es mayor de edad, le faltan ${cuantoFalta} años`)
}

console.log("---------------")
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
console.log("Punto 5: ")

let edadEj5 = Math.floor(Math.random() * 100)

let mensaje = edadEj5 >= 18 ? (`Es mayor de edad.`) : (`Es menor de edad.`)
console.log(mensaje)

console.log("---------------")
// 6. Muestra en qué estación del año nos encontramos dependiendo del valor de una variable "mes"
console.log("Punto 6: ")

let mes = Math.floor(Math.random() * 12) + 1
console.log(`Mes numero: ${mes}`)

if(mes === 12 || mes === 1 || mes === 2){
    console.log(`El mes ${mes}, es verano`)
}else if(mes === 3 || mes === 4 || mes === 5){
    console.log(`El mes ${mes}, es otoño`)
}else if(mes === 6 || mes === 7 || mes === 8){
    console.log(`El mes ${mes}, es inviero`)
}else if(mes === 9 || mes === 10 || mes === 11){
    console.log(`El mes ${mes}, es primavera`)
}else{
    console.log(`Fuera de rango...`)
}

console.log("---------------")
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
console.log("Punto 7: ")

let cantidadDias = null
if(mes === 1 || mes === 3 || mes === 5 || mes ===7 || mes === 8 || mes ===10 || mes === 12){
    dias = 31
}else if(mes === 4 || mes === 6 || mes === 9 || mes === 11){
    dias = 30
}else if(mes === 2){
    dias = 28
}else{
    dias = "Mes invalido, intente nuevamente"
}

console.log(`El mes ${mes}, tiene ${dias} dias.`)

console.log("---------------")
// switch
console.log("Ahora con switch")
console.log("---------------")
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
/*console.log("Punto 8: ")

let idioma = 1
let mensaje1 = null

switch(idioma){
    case 1:
        mensaje1 = "Hello"
        break
    case 2:
        mensaje1 = "Hola"
        break
    case 3:
        mensaje1 = "Salve"
        break
    default
}
console.log(mensaje1)
*/
console.log("---------------")
// 9. Usa un switch para hacer de nuevo el ejercicio 6
console.log("Punto 9: ")

let estacion = null
//mes === 1 || mes === 3 || mes === 5 || mes ===7 || mes === 8 || mes ===10 || mes === 12)
switch(mes){
    case 1: diasSwitch = 31
    break
    case 2: diasSwitch = 28
    break
    case 3: diasSwitch = 31
    break
    case 4: diasSwitch = 30
    break
    case 5: diasSwitch = 31
    break
    case 6: diasSwitch = 30
    break
    case 7: diasSwitch = 31
    break
    case 8: diasSwitch = 31
    break
    case 9: diasSwitch = 30
    break
    case 10: diasSwitch = 31
    break
    case 11: diasSwitch = 30
    break
    case 12: diasSwitch = 31
    break
    default: diasSwitch = "Mes invalido, intente nuevamente."
}

console.log(`La estacion del ${mes} es ${estacion}`)

console.log("---------------")
// 10. Usa un switch para hacer de nuevo el ejercicio 7
console.log("Punto 10: ")

let diasSwitch = null

switch(mes){
    case 1: estacion = "verano"
    break
    case 2: estacion = "verano"
    break
    case 3: estacion = "otoño"
    break
    case 4: estacion = "otoño"
    break
    case 5: estacion = "otoño"
    break
    case 6: estacion = "invierno"
    break
    case 7: estacion = "invierno"
    break
    case 8: estacion = "invierno"
    break
    case 9: estacion = "primavera"
    break
    case 10: estacion = "primavera"
    break
    case 11: estacion = "primavera"
    break
    case 12: estacion = "verano"
    break
    default:  estacion = "Error"
}

console.log("---------------")

