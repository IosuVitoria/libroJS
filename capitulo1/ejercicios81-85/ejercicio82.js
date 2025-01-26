// 82. Escribe un programa que cuente cuántas vocales tiene una cadena.

const contarVocales = (cadena) => {
    const vocales = 'aeiouAEIOU';
    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            contador++;
        }
    }

    return contador;
}


const cadena = "Hola Mundo";
console.log(`La cadena "${cadena}" tiene ${contarVocales(cadena)} vocales.`);