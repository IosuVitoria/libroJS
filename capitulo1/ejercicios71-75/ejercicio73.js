// 73. Usa rest para combinar argumentos en un array dentro de una función.

const combinarArrays = (primerElemento, ...otrosElementos) => {
    return [primerElemento, ...otrosElementos];
}

console.log(combinarArrays(1, 2, 3, 4)); 
console.log(combinarArrays("a", "b", "c"));
