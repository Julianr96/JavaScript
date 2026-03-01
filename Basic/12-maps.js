//map

//las estructuras en general son para guardar conjuntos de datos a diferencia de los datos primitivos

//tambien se lo llama diccionarios en otros lenguajes

//aca cada elemento esta formado por un par de elementos. Una clave/key y un value... Podemos almacenar como key y value cualquier tipo de dato

//Una key el elemento que vamos a usar para buscar dentro de la estructura y un value que esta asociada a esa clave

//Declaracion: 

let myMap = new Map()

console.log(myMap)

//inicializacion

myMap = new Map([  //para pasar valores necesitamos los corchetes como en los sets
    ["name", "Julian"],
    ["email", "julianrosmeberg2@gmail.com"],
    ["age", 29]
])

console.log(myMap)

//Metodos y propiedades

//set para actualizar un elemento o agregarlo

myMap.set("alias", "JulianDev") //agregamos un elemento
myMap.set("name", "Julian Rosemberg") // actualizamos un elemento

console.log(myMap)

//get sirve para recuperar el valor

console.log(myMap.get("name")) // hacemos un console log donde usamos el map.get con una clave y el retorno sera el value
console.log(myMap.get("surName")) //Si la clave no existe retorna "undefined"

//has

console.log(myMap.has("surName"))// con has chequeamos si existe y retorna un boleano (true/false)
console.log(myMap.has("age")) 

//delete

myMap.delete("email")

console.log(myMap)

//keys, values y entries (claves/valores)

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())


//size

console.log(myMap.size)

//clear

myMap.clear()

console.log(myMap)