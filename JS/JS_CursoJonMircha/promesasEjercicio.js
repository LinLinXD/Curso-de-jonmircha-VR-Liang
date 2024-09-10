

function descargarArchivo(nombreArchivo) {
    return new Promise((resolve, reject) => {
        if (typeof nombreArchivo !== "string") {
            reject(`Error: El nombre del archivo ${nombreArchivo} no es una cadena de texto`);
        } else {
            const tiempoDescarga = 1000 + Math.random() * 2000; // Entre 1 y 3 segundos
            setTimeout(() => {
                resolve(`Descarga del archivo ${nombreArchivo} completada en ${tiempoDescarga.toFixed(0)} ms`);
            }, tiempoDescarga);
        }
    });
}

// Simular la descarga de tres archivos en secuencia
descargarArchivo("archivo1.txt")
    .then((mensaje) => {
        console.log(mensaje);
        return descargarArchivo("archivo2.txt");
    })
    .then((mensaje) => {
        console.log(mensaje);
        return descargarArchivo("archivo3.txt");
    })
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    });


