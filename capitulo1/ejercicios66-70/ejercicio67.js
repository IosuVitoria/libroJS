// 67. Escribe una función que reciba un número y devuelva su cuadrado.

const elevarCuadrado = (num) => {
    return num ** 2;
}

const elevarCuadrado2 = (num) => {
    return Math.pow(num, 2);
}

console.log(elevarCuadrado(2));
console.log(elevarCuadrado2(20));