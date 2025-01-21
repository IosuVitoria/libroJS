// Ejercicio 3: Escribe una función llamada generarAcronimo que tome una frase como entrada y 
// devuelva el acrónimo formado por la primera letra de cada palabra, en mayúsculas.

const generarAcronimo = (string) => {
    let acronimo = "";
    let extraccion = string.split(" ");
    for(let i = 0; i < extraccion.length; i++){
        acronimo += extraccion[i][0];
    }
    return acronimo;
}

console.log(generarAcronimo('Structured Query Language'));
console.log(generarAcronimo('Random Access Memory'));