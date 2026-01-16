// 01-operators-exercises.js para cada operación

// 1. Crea una variable para cada operación aritmética
let n1 = 3 ,n2 =5

console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n1 / n2)
console.log(n1 % n2)
console.log(n1 ** n2)
n1++ //tambien se puede hacer como la siguente linea
n2 -= 2
console.log(`El numero uno es: ${n1} y el numero dos es: ${n2}.`)



// 2. Crea una variable para cada tipo de operación de asignación, 
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let variableAsignacion = 2


console.log("Antes: " + variableAsignacion)

variableAsignacion += 1
variableAsignacion -= 1
variableAsignacion *= 100
variableAsignacion /= 10
variableAsignacion %= 3
variableAsignacion **= 2
console.log("Despues: " + variableAsignacion)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

// 5. Utiliza el operador lógico and

// 6. Utiliza el operador lógico or


// 7. Combina ambos operadores lógicos

// 8. Añade alguna negación
console.log(n1, n2)
console.log(n1 > n2 && n1!= 0)

// 9. Utiliza el operador ternario
const isflag = true

isflag ? console.log("Verdadero!") : console.log("Falso!")
// 10. Combina operadores aritméticos, de comparación y lógicos
console.log(n1++ * n2 > n2-- / 2 && 2 == 2)
console.log(n1++ * n2 > n2-- / 2 && 1 == 2)