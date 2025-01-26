// 64. Crea un objeto y usa un for-in para recorrer todas sus propiedades.

const objeto = {nombre: 'Iosu', edad: 39, profesion: 'programador'};

for (const propiedad in objeto) {
    console.log(`${propiedad}: ${objeto[propiedad]}`);
}
  