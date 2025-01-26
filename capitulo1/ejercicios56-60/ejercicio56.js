// 56. Escribe un programa que pida al usuario su edad y determine si es mayor de edad.

// const mayorDeEdad = (edad) => {
//     if(edad >= 18){
//         return 'Es mayor de edad';
//     }else{
//         return 'Es menor de edad';
//     }
// }

//Refactorizando usando operador ternario.

// const mayorDeEdad = (edad) => {
//     return edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
// }

//Introduciendo un control de errores.

// const mayorDeEdad = (edad) => {
//     if (typeof edad !== 'number' || isNaN(edad) || edad <= 0) {
//         return 'Introduce una edad válida';
//     }

//     return edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
// }

//Volviendo a refactorizar para compactar el código con el control de errores.

const mayorDeEdad = (edad) => 
    (typeof edad === 'number' && edad >= 0) 
        ? (edad >= 18 ? 'Mayor de edad' : 'Menor de edad') 
        : 'Introduce una edad válida';


console.log(mayorDeEdad(19));
console.log(mayorDeEdad(3));
console.log(mayorDeEdad('hola'));