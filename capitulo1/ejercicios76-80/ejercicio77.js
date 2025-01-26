// 77. Escribe un contador que use closures para incrementar y mostrar un valor.

const crearContador = () => {
    let contador = 0; 
    return function incrementar() {
        contador++;
        console.log(`Contador: ${contador}`);
        return contador;
    };
}

const contador = crearContador();
contador(); 
contador(); 
contador(); 