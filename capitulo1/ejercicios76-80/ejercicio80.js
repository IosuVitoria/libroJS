// 80. Implementa una función que genere saludos personalizados usando closures.

const crearGeneradorDeSaludos = (saludoInicial) => {
    return function saludar(nombre) {
        return `${saludoInicial}, ${nombre}!`;
    };
}

const saludoFormal = crearGeneradorDeSaludos("Buenos días");
console.log(saludoFormal("María")); 

const saludoInformal = crearGeneradorDeSaludos("Hola");
console.log(saludoInformal("Carlos"));