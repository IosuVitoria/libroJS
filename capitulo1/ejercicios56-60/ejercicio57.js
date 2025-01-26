// 57. Crea un menú que, usando switch, imprima un mensaje dependiendo del número que ingrese el usuario.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const opciones = [
    "Opción 1",
    "Opción 2",
    "Opción 3",
    "Opción 4",
    "Opción 5"
];

console.log("Menú:");
opciones.forEach((opcion, index) => console.log(`${index + 1}. ${opcion}`));

rl.question("Ingrese el número de la opción deseada: ", (respuesta) => {
    const opcion = parseInt(respuesta, 10); 
    const seleccion = opciones[opcion - 1];

    console.log(seleccion ? `Has seleccionado la ${seleccion}` : "Opción no válida");

    rl.close(); 
});
