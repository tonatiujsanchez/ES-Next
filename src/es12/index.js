// === === === === replace | replaceAll === === === ===

const frase = 'Javascript es genial, con Javascript puedo progamar el futuro de la web.';
const nuevaFrase = frase.replace('Javascript', 'Pyton');        // Remplaza la primera coincidencia
const nuevaFraseAll = frase.replaceAll('Javascript', 'Pyton');  // Remplaza todas las coincidencias

console.log(frase);
console.log(nuevaFrase);
console.log(nuevaFraseAll);


// === === === === metodos privados en Clases === === === ===

class Message{
    
    show( value, age ){
        console.log(value, this.#agePerson(age));
    }

    #agePerson(age){
        return `de ${ age } años`
    }
}
const messageNew = new Message();

messageNew.show( 'Brandon', 27 )
// console.log(messageNew.agePerson(65));



// === === === === Promise any: devuelve solo la primera en resolverse correctamente === === === ===
const promise1 = new Promise( (resolve, reject) => reject('1') );
const promise2 = new Promise( (resolve, reject) => resolve('2') );
const promise3 = new Promise( (resolve, reject) => resolve('3') );

Promise.any([ promise1, promise2, promise3 ])
    .then( resp => console.log( resp ));



// === === === ref: una referencia debil de nuestro elemento === === ===
class anyClass{
    constructor( element ){
        this.ref = new WeakRef( element )
    }
}


// === === === operadores de comparacion y asigancion === === === === == =
// Compara las variables, y el resultado lo asigna a la primra variable(el de la hisquierda).
let isTrue = true;
let isFalse = false;
console.log( isTrue &&= isFalse );

let isTrue = true;
let isFalse = false;
console.log( isTrue ||= isFalse );

let isTrue = true;
let isFalse = false;
console.log( isTrue ??= isFalse );


// tc 39.es encargaodos de ESNext


/*
Proceso para implementarse una nueva caracteristica a Javascript:
    stage 0: Idea
    stage 1: Proposal   : propuesta
    stage 2: Draft      : Borrador
    stage 3: Candidate  : Candidato
    stage 4: Ready      : Listo para ser incorporado en la sig. version de es.
*/ 