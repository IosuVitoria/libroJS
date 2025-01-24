const generarSecuencia = (longitud) => {
    const bases = ["A", "T", "C", "G"];
    let secuencia = "";
  
    for (let i = 0; i < longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * bases.length);
      secuencia += bases[indiceAleatorio];
    }
  
    return secuencia;
};
  
console.log(generarSecuencia(10));