// 70. Define una función con un parámetro por defecto y prueba llamarla sin pasarle ese parámetro.

const saludo = (nombre) => {
    console.log(`Buenos días, ${nombre}`);
}

saludo(); // Resultado: Buenos días, undefined;

// DIFICULTAD EXTRA: INVESTIGA PARA MANEJAR LA AUSENCIA DE NOMBRE.

// Si usamos try-catch. 

const saludo2 = (nombre) => {
    try {
        console.log(`Buenos días, ${nombre}`);
    } catch (error) {
        console.log(`Te saludo usuario sin nombre.`)
    }
}

saludo2();

// Si usamos if-else.

const saludo3 = (nombre) => {
    if(nombre != undefined) {
        console.log(`Buenos días, ${nombre}`);
    } else {
        console.log(`Te saludo usuario sin nombre.`)
    }
}

saludo3();
saludo3('Carlos');
