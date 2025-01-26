// 76. Crea una función que devuelva otra función que imprima un mensaje.

const devolverMensaje = () => {
    return function mensaje (){
        console.log('Saludo');
    }
}

const miMensaje = devolverMensaje();

const devolverMensaje2 = () => {

    const mensaje = () => {
        console.log('Saludo 2.');
    }

    return mensaje;
}

const miMesaje2 = devolverMensaje2();
