// 78. Usa un closure para mantener un estado privado dentro de una función.

const crearCajaFuerte = () => {
    let estadoPrivado = "Secreto"; 
    return {
        obtenerEstado: () => estadoPrivado,
        modificarEstado: (nuevoEstado) => {
            estadoPrivado = nuevoEstado;
        }
    };
}

const cajaFuerte = crearCajaFuerte();
console.log(cajaFuerte.obtenerEstado()); 
cajaFuerte.modificarEstado("Nuevo Secreto");
console.log(cajaFuerte.obtenerEstado()); 