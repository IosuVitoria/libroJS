// 58. Escribe un programa que use if-else para determinar si un número es par o impar.

// const parOImpar = (numero) => {
//     if(numero % 2 == 0){
//         return 'Es par';
//     }else{
//         return 'Es impar';
//     }
// }

//Refactorizamos primero y analizamos cómo tratar debidamente la no introducción de un número en la función.

// const parOImpar = (numero) => {
//     if( typeof numero !== 'number'){
//         return 'Introduce un número válido.'
//     }
    
//     return numero % 2 === 0 ? 'Es par.' : 'Es impar';
// }

//Ejercicio final. Refactorizar todo para intentar compactar.

const parOImpar = (numero) => {
    return (typeof(numero) == 'number') ? (numero % 2 == 0 ? 'Es par.' : 'Es impar') : 'Introduce un número válido.';
}

console.log(parOImpar(2));
console.log(parOImpar(3));
console.log(parOImpar('Es buena idea.'));