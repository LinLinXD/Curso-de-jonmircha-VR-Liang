
console.log(this === window);
console.log(this);



this.nombre = "Contexto global"
console.log(this.nombre);



function imprimir(){
    console.log(this.nombre);
}

imprimir()

const obj = {
    nombre: "contexto obj",
    imprimir: function() {
        console.log(this.nombre);
    }
}

obj.imprimir()