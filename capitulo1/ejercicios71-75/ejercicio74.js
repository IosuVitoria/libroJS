// 74. Define una función con múltiples parámetros por defecto.

const configurarPersona = (nombre = 'Usuario', edad = 18, pais = 'No aportado') => {
    return `Nombre: ${nombre}, Edad: ${edad}, País: ${pais}`;
}

console.log(configurarPersona("Laura", 25, "España"));
console.log(configurarPersona()); 