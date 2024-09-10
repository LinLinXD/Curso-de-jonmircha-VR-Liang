




console.log(this);
this.lugar = "Contexto Global";

function saludar(saludo, quien){
    console.log(`${saludo} ${quien} desde el ${this.lugar}`);


}

saludar("Hola", "kEnAi");


const obj = {
    lugar: "Contexto obj",
    

}

saludar.call(obj, "Hola", "Jon")
saludar.apply(obj, ["Hola","Jon"])


const persona = {
    nombre: `Jon`,
    saludar: function (){
        console.log(`Hola ${this.nombre}`);
    }

}

persona.saludar()

const otraPersona = {
    saludar: persona.saludar.bind(persona),
}

otraPersona.saludar();

console.log("");

const obj2 = {
    lugar: "Contexto obj2",
    saludar: function () {
        console.log(lugar);
    }
}

obj2.saludar()







