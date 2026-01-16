//if, else if, else

//if(si)

let age = 37

if(age == 37){
    console.log("La edad es 37")
}else{
    console.log("La edad no es 37")
}

//else if

age++

if(age == 37){
    console.log("La edad es 37")
}
else if(age < 18){
    console.log("Es menor de edad")
}else{
    console.log("La edad no es 37 ni es menor de edad")
}

console.log("-------------------")

//operadores ternarios

//age == 37 ? console.log("La edad es 37") : console.log("La edad no es 37")

const message = age == 37 ? ("La edad es 37") : ("La edad no es 37")
console.log(message)

console.log("-------------------")

//switch

let day = 0
let dayName

/*if(day == 0){
    dayName = "Lunes"
}else if(day == 1){
    dayName = "Martes"
}else if(day == 2){
    dayName = "Miercoles"
}
    */
   switch(day){
    case 0:
        dayName = "Lunes"
        break //rompre la ejecucion del bloque para que no siga revisando casos en caso de coincidir
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Dia de numero incorrecto"
   }

   console.log("El dia es " + dayName)