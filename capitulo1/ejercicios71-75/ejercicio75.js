// 75. Escribe una función que acepte una lista de números y devuelva el mayor de ellos.

const numeroMayor = (...numeros) => {
    return Math.max(...numeros);
}

console.log(numeroMayor(1, 5, 3, 9, 2)); 
console.log(numeroMayor(-10, -5, -1, -20));