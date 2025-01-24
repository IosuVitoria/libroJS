
const transcripcionDNA = (cadena) =>{
    let cadenaTranscrita = '';
    let letras = cadena.split('');

    for(let i = 0; i < letras.length; i++){
        if(letras[i] === 'A'){
            cadenaTranscrita += 'A';
        }else if(letras[i] === 'T'){
            cadenaTranscrita += 'U';
        }else if(letras[i] === 'C'){
            cadenaTranscrita += 'C';
        }else if(letras[i] === 'G'){
            cadenaTranscrita += 'G';
        }else{
            console.log(' Base nitrogenada no válido.')
        }
    }

    return cadenaTranscrita;

}

console.log(transcripcionDNA('AAAATTCCAAGAGACCAGGAATAGA'));