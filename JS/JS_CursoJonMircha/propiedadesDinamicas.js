
//Necesitaremos crear propiedades al vuelo de un objeto



const objUsuarios = {
    [`id_{${Math.round(Math.random()* 100 + 5)}}`]: "Valor aleatorio"

}

const usuarios = ["Jon", "Irma", "Miguel", "Kala", "Kenai"]

usuarios.forEach((usuario,index) =>{
    objUsuarios[`id_${index}`] = usuario;
})

console.log(objUsuarios);
