// Ejercicio 4: Escribe una función llamada validarSudoku que reciba un tablero de Sudoku representado como una matriz de 9x9. 
// La función debe validar si el tablero cumple con las reglas básicas del Sudoku:

// Cada fila debe contener números del 1 al 9 sin repetirse.
// Cada columna debe contener números del 1 al 9 sin repetirse.
// Cada subcuadrícula de 3x3 debe contener números del 1 al 9 sin repetirse.

const validarSudoku = (tablero) => {
    
    const esValido = (numeros) => {
        const conjunto = new Set(numeros);
        return conjunto.size === 9 && !conjunto.has(0); 
    };

 
    for (let fila of tablero) {
        if (!esValido(fila)) {
            return false;
        }
    }

 
    for (let col = 0; col < 9; col++) {
        const columna = [];
        for (let fila = 0; fila < 9; fila++) {
            columna.push(tablero[fila][col]);
        }
        if (!esValido(columna)) {
            return false;
        }
    }

    
    for (let filaInicio = 0; filaInicio < 9; filaInicio += 3) {
        for (let colInicio = 0; colInicio < 9; colInicio += 3) {
            const bloque = [];
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    bloque.push(tablero[filaInicio + i][colInicio + j]);
                }
            }
            if (!esValido(bloque)) {
                return false;
            }
        }
    }

   
    return true;
};


const tablero = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

console.log(validarSudoku(tablero)); 


const tableroValido = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

console.log(validarSudoku(tableroValido)); // true
