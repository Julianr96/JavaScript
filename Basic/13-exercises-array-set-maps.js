//1. Crea un array que almacene cinco animales
console.log("1. Crear un array que almacene cinco animales:")

let ArrayAnimales = ["perro", "gato","vaca","cerdo","gallina"]

console.log(ArrayAnimales)

console.log("---------------")
console.log("2. Añade 2 mas, uno al principio y otro al final: ")

ArrayAnimales.unshift("raton") //agrego al principio
ArrayAnimales.push("cangrejo")  //agrego al final

console.log(ArrayAnimales)

console.log("---------------")
console.log("3. Elimina al que se encuentra en la primera posicion: ")

ArrayAnimales.splice(2, 1) //primer dato es el indice luego el otro es la cantidad de datos a borrar

console.log(ArrayAnimales)

console.log("---------------")
console.log("4. Crea un set que almacene 5 libros: ")

let setLibros = new Set(["la torre oscura","harry potter","mine kampf","guerra","odisea"])

console.log(setLibros)

console.log("---------------")
console.log("5. Añade dos mas. Uno al principio y otro al final: ")

setLibros.add("javascript") //meto al final de la lista

console.log(setLibros)

console.log("No puedo meter adelante de la lista el libro porque el set no tiene indice. Se podria pasar a array, cambiar y pasar a set...")

let arrayLibros = Array.from(setLibros) //puse new array y era array.from()

arrayLibros.unshift("naniga")

//let setLibros2 = new Set(arrayLibros) mejor como quedo abajo!
setLibros = new Set(arrayLibros)

console.log(setLibros)
console.log("Pudeee! ")

console.log("5.5. Añade dos mas uno repetido: ")

setLibros.add("css","mine kampf")

console.log(setLibros)

console.log("6. Elimina uno de tu eleccion: ")

setLibros.delete("naniga")

console.log(setLibros)

console.log("7. Crea un mapa que asocie el numero del mes a su nombre: ")

mapMeses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

console.log("8. Comprueba si el mes numero 5 existe en el map y retorna el valor: ")

console.log(mapMeses.has(5))
console.log(mapMeses.get(5))

console.log("10. Crea un Array, transformalo en set y almacenalo en un Map: ")
