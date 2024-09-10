


let edad = 17

if(edad < 18){
    console.log(`Tu edad es de ${edad}, eres menor de edad`);
}else{
    console.log(`Tu edad es de ${edad}, eres mayor de edad`);
}

hora = 12.45

if(hora >= 6 && hora < 12){
    console.log("Buenos días");
}else if(hora >= 12 && hora < 18){
    console.log("Buenas tardes");
} else if (hora >= 18 && hora < 23){
    console.log("Buenas noches");
} else if (hora >= 23 && hora < 25){
    console.log("Eche a dormir hombre, joda'");
} else {
    console.log("La hora digitada es erronea");
}

let eresMayor = (edad>=18)
? "Eres mayor de edad" /* PARTE VERDADERA */ 
: "Eres menor de edad" /* PARTE FALSA */ ;
