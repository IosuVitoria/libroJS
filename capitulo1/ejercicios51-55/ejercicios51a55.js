// 51. Suma dos números y muestra el resultado en la consola.

console.log("Resultado de sumar dos números.")
console.log(2 + 3);


// 52. Compara si dos números son iguales usando === y ==. Explica la diferencia.

console.log("Comparación de dos números.");
console.log(2 === 2); 
console.log(2 === "2"); 
console.log(2 == "2"); 
console.log(2 == 2); 

// La diferencia entre los operadores de comparación == y === es que el primero solo compara los valores de las variables, mientras que el segundo compara tanto los valores como los tipos de las variables. Por lo tanto, 2 == "2" es true porque ambos valores son iguales, pero 2 === "2" es false porque los tipos de las variables son diferentes.


// 53. Escribe un programa que determine si un número es mayor que otro usando operadores de comparación.

console.log("Comparación de dos números. PRIMER PROGRAMA");

let number1 = 2;
let number2 = 3;

const esMayor = number1 > number2;

console.log(esMayor);

// 54. Utiliza operadores lógicos para combinar condiciones. Ejemplo: edad > 18 && esEstudiante.


console.log("Comparación de dos números. SEGUNDO PROGRAMA");

let edad = 25;
let esEstudiante = false;

const esMayorDeEdadYEstudiante = edad > 18 && esEstudiante;

console.log(esMayorDeEdadYEstudiante);


// 55. Usa el operador ternario para determinar si un número es positivo, negativo o cero.

console.log("Comparación de dos números. TERCER PROGRAMA");

let number = 0;

const resultado = number > 0 ? "positivo" : number < 0 ? "negativo" : "cero";

console.log(resultado);
