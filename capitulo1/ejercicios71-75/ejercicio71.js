// 71. Escribe una función que reciba un nombre y lo salude. Si no se pasa un nombre, usa "Desconocido".

const saludo = (nombre = 'Desconocido') => {
    console.log(`Salidos, ${nombre}`);
}

saludo();

saludo('Iosu');