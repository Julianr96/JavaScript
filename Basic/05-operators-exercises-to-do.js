//strings

//concatenacion
let myName = "julian"
let greeting = "Hola, " + myName + "!"

console.log(greeting)
console.log(typeof greeting)

console.log("--------------------------")

//longitud
console.log(greeting.length)

console.log("--------------------------")

//acceso a caracteres
console.log(greeting[0])
console.log(greeting[12])

console.log("--------------------------")

//metodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("julian"))
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Rosemberg"))
console.log(greeting.includes("julian"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Rosemberg"))
console.log(greeting.slice(0, 10))
console.log(greeting.replace("julian", "rosemberg"))

console.log("--------------------------")

//templates literals (plantillas literales)
let message = `hola, este
es mi
curso de 
JavaScript`

console.log(message)

let email = "julianrosemberg2@gmail.com"

console.log(`Hola, ${myName}! Tu email es ${email}`)
