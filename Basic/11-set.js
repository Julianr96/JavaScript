//set

//declaracion

let mySet = new Set() // a diferencia del array este si debe inicializar de esta manera mas formal
//let mySet2 = {} // X... Esto NO ES UN SET

console.log(mySet)
//inicializacion

mySet = new Set("Julian", "alias_Iuli","Rosemberg", 29, true,"JulianRosemberg2@gmail.com")

console.log(mySet)

console.log("-----------------")
// cuando corremos el programa el set muestra la cantidad de letras del primer elemento. Porque esta mal pasada la data.

let mySet1 = new Set()

mySet1 = new Set(["Julian", "alias_Iuli","Rosemberg", 29, true,"JulianRosemberg2@gmail.com"]) //los datos los tenemos que meter entre corchetes!

console.log(mySet1)
