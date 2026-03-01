//set

//declaracion

let mySet = new Set() // a diferencia del array este si debe inicializar de esta manera mas formal
//let mySet2 = {} // X... Esto NO ES UN SET

console.log(mySet)
//inicializacion

mySet = new Set("Julian", "alias_Iuli","Rosemberg", 29, true,"JulianRosemberg2@gmail.com")

console.log("Inicializamos mal es set sin [] en sus parametros")

console.log(mySet)

console.log("-----------------")
// cuando corremos el programa el set muestra la cantidad de letras del primer elemento. Porque esta mal pasada la data.

let mySet1 = new Set()

mySet1 = new Set(["Julian", "alias_Iuli","Rosemberg", 29, true,"JulianRosemberg2@gmail.com"]) //los datos los tenemos que meter entre corchetes!

console.log("Lo inicializamos de manera correcta con sus parametros entre []")

console.log(mySet1)

//metodos comunes:

//add y delete

mySet1.add("https://julian.nigg") //añade al final de la lista

console.log(mySet1)

console.log(mySet1.delete("https://julian.nigg")) // no hay indice entonces hay que pasarle el dato exacto para borrarlo.
                                                //si lo metemos dentro del console log te manda true o false si encuentra y borra o no encuentra
console.log("-----------------")
//has analiza si existe on no. Retorna verdadero o falso

console.log(mySet1.has("Julian"))

console.log(mySet1.has("Juli"))

//size a diferencia del array que es leght aca es size

console.log(mySet1.size)

//Convertir un set a un array

let myArray = [] //inicializamos el array

myArray = Array.from(mySet1)//al array le asignamos el set como parametro

console.log(myArray)
console.log(mySet1)

//convertir un array en set

mySet1 = new Set(myArray) // inicializamos un nuevo set y le mandamos de parametro el array

console.log(mySet1)

//La diferencia de los sets y arrays es que en los arrays se puede repetir datos...