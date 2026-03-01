//arrays! 

let myArray = []

console.log(myArray)
console.log(myArray.length)

myArray[1] = "Julian"
//Le metemos un dato en la posicion 1 que seria la segunda ya que el primer dato se inicia desde el 0.
console.log(myArray)
console.log(myArray.length)
//al mostrar los valores del array se muestra como vacia la posicion 0 y la 1 con el dato. Con lenght vemos la cantidad de espacios
//---------------------------
//otra manera mas estricta de crear un array. Podemos darle dimension de esta manera.
let myArray2 = new Array(3)
console.log(myArray2)

// re inicializamos para porobar como cambia si le damos varios datos desde su creacion.
myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

console.log("-----------------")
//probamos tipos de dato. Entran todos!
myArray = ["Julian", "Rosemberg", 29, true]
myArray2 = new Array("Julian", "Rosemberg", 29, true)

console.log(myArray)
console.log(myArray2)

console.log("-----------------")
//algunas propiedades mas
myArray2 = new Array(3)

console.log(myArray2)

myArray2[0] = "Juli"
myArray2[1] = "Rosenberg"
myArray2[2] = 29

console.log(myArray2)

console.log("-----------------")
//Metodos comunes

myArray = []

//push y pop: Push mete valores adentro del array desde el 0 para adelante. El pop elimina el ultimo elemento y lo devuelve

myArray.push("Julian")
myArray.push("Rosemberg")
myArray.push(29)

console.log(myArray)

console.log(myArray.pop()) // sacamos el ultimo elemento del array y lo mostramos en el console log

console.log(myArray)

//shift y unshift

//myArray.shift()

console.log(myArray.shift()) // sacamos el primer elemento del array y lo mostramos en el console log
console.log(myArray)

myArray.unshift("Julian", "alias Iuli") // Metemos valores en el array desde el 0 hacia adelante moviendo los valores ya
                                        // ingresados anteriormente
console.log(myArray)

console.log("-----------------")
//length: no es una funcion, es una propiedad del array (La cantidad de espacios que tiene)

console.log(`${myArray.length} espacios tiene el array`) //imprimimos la cantidad de espacios tomados por el array

console.log("-----------------")

//clear: Para borrar podemos volverlo a inicializar
myArray = [] //de esta manera
myArray.length = 0 //tambien seria una manera de borrar los datos y espacios reservados del array

console.log(myArray)

console.log("-----------------")
//slice: 

myArray = ["Julian", "alias_Iuli","Rosemberg", 29, true]

console.log("slice")

let myNewArray = myArray.slice(1, 3) // aca lo que le damos es el slice, la tajada para que desde el indice hasta cual, pero sin contar el ultimo

console.log(myArray)
console.log(myNewArray)

console.log("-----------------")
//Splice: Elimina los elementos entre estos dos valores que le damos de referencia

console.log("splice")

myArray.splice(1, 3) 

console.log(myArray)

console.log("-----------------")

myArray = ["Julian", "alias_Iuli","Rosemberg", 29, true]

console.log(myArray)

myArray.splice(1, 2, "Nueva entrada") //aca borramos las posiciones 1 a 2 y agregamos un nuevo dato

console.log(myArray)

//resumen, es muy importante el array y tengo que buscar estudiar mas sobre las operaciones que pueden hacer...