
const calcularGC = (string) => {

    let conteo = 0;
    let analisisLetras = string.split('');
    let calculoGC;

    for(let i = 0; i < analisisLetras.length; i++){
       
        if(analisisLetras[i] == 'G' || analisisLetras[i] == 'C'){
            conteo++;
        }
    }

    calculoGC = (conteo/analisisLetras.length) * 100;

    return calculoGC; 
}

const DNA = 'AAAATTATTATATCCGGCGGGCCGA';

console.log(calcularGC(DNA));