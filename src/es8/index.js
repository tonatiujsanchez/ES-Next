const data = {
    frontend : 'Tonatiuj',
    backend : 'Brandon',
    design : 'Nath',
}

// Convertir un objeto en un array
const entries = Object.entries(data);
console.log(entries);
console.log(entries[0]);

// Convertir un Obj en un array ignorando las llaves 
const values = Object.values(data);
console.log(values);

// Agregar una cadena al inicio o al final de otra cadena.
const varString = 'Hello';
console.log( varString.padStart(7, 'hi') );
console.log( varString.padEnd(12, 'h') );


// === === === async - await === === ===

const helloPromise = ()=>{
    return new Promise(( resolve, reject )=>{
        (true)
            ? setTimeout( ()=>{ resolve('Hello world desde la promesa.') },3000 )
            : reject( new Error('Test error: desde la promesa.') )
    })
}

// Tradicional
helloPromise()
    .then( console.log )
    .catch( console.log )

// Con async y await
const helloAsync = async ()=>{
    console.log('Async - await: ', await helloPromise() );
}
helloAsync();

// Uso correcto para poder capturar errores.
const helloAsyncCorrectUse = async ()=>{
    try {
        console.log('Async - await & Try-Catch: ', await helloPromise() );
    } catch (error) {
        console.log('Error en la promesa', error);
    }
}
helloAsyncCorrectUse();
