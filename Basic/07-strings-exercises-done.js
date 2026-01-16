// strings-exercises.js

// 1. Concatena dos cadenas de texto
let miNombre = "Julian"
console.log(`Hola, mi nombre es ${miNombre}!`)

// 2. Muestra la longitud de una cadena de texto
console.log(`La lungitud de mi nombre es: ${miNombre.length}`)

// 3. Muestra el primer y último carácter de un string
console.log(`El primer caracter de mi nombre es: ${miNombre[0]} y el ultimo caracter de mi nombre es: ${miNombre[5]}`)

// 4. Convierte a mayúsculas y minúsculas un string
console.log(miNombre.toLocaleUpperCase()) //como es una funcion o metodo hay que agregar los ()

// 5. Crea una cadena de texto en varias líneas
console.log(`Hola amigos.
como estan?`)

// 6. Interpola el valor de una variable en un string
//hecho

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let text1 = "Hola este es un ejercicio de JS hecho por " + miNombre
console.log(text1.replace(/\s+/g, "-"))
//\s+ → busca uno o más espacios en blanco (incluye espacios, tabulaciones y saltos de línea).
//g → bandera global, asegura que se reemplacen todos los espacios en el string.
//"-" → es el carácter que usaremos para reemplazar.


// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(text1.includes("Julian"))

// 9. Comprueba si dos strings son iguales
console.log(text1.includes(miNombre))

// 10. Comprueba si dos strings tienen la misma longitud
console.log(text1.length == miNombre.length)