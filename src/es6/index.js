function newFunction(name, age, country) {
    var name = name || 'Tonatiuj';
    var age = age || 28;
    var country = country || 'MX';

    console.log( { name, age, country } );

}
newFunction();


function newFuntion2( name= 'Ton', age = '28', country = 'MX' ) {
    console.log( { name, age, country } );
}


newFuntion2();
newFuntion2( 'Brandon', 4, "México" );

let hello = 'Hello';
let world = 'World';
let hw = `${ hello } ${ world }`;

console.log( hw );


// Salto de linea
let lorem = 'Una frase epica \n'+
    'Salto de linea de la frase epica.'
console.log(lorem);

let lorem2 = `Una nueva frase epica
ahora con ES6`
console.log(lorem2);

// Destructuracion de objetos
let person = {
    'name': 'Brandon',
    'age': 28,
    'country': 'MX'
}
let { name, age, country } = person;

console.log( name, age, country );

// Operador Spread
let team1 = ['Oscar', 'Julia', 'Ricardo'];
let team2 = ['Valeria', 'Yessica', 'Camila'];

let teamAll = [ 'David', ...team1, ...team2 ]

console.log( teamAll );


// let y const

{
    var globalVar = "Globar Var";
}
{
    let globalLet = 'Global Let';
    console.log( globalLet );
}

console.log( globalVar );



// Parámetros en objetos
let name = 'Brandon';
let age = 27;

// es5
objES5 = {
    name: name, 
    age: age
};
console.log('ES5',objES5);
// es6
objES6 = {
    name, 
    age
}
console.log('ES6', objES6);

// Arrow function

const names = [
    {
        name: 'Santiago',
        age: 57
    },
    {
        name: 'Nath',
        age: 27
    }
];

let listNames = names.map( function( item ) {
      console.log( item );
      return item.name;  
} )
console.log(listNames);


let listNamesArrow = names.map( item => console.log( item ) )

// Definicion 1
let listNamesArrow2 = ( name, age, country )=>{
    // Contenido
}

// Definicion 2
let listNamesArrow = name =>{
    //contenido
}

// Definicion 3 con return implicito
const square = numero => numero * numero;
console.log( square( 5 ) );


// ==== Promesas ====

const helloPromise = ( numero )=>{
    return new Promise( ( resolve, reject )=>{
        if( numero > 5 ){
            resolve('Se resolvio correctamente.')
        }else{
            reject( 'Fallo la promesa.' )
        }
    })
}

helloPromise( 6 )
    .then( console.log )
    .catch( console.warn )




// ==== Clases ====

class Calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sumar( valueA, valueB ){
        return valueA + valueB;
    }
}

const calc = new Calculator();
console.log( calc.sumar( 5, 8 ) );


// ==== Modulos ====

import myHello from './module';
myHello();

// ==== Generadores ====

function* helloWorld() {
    if( true ){
        yield ' Hello'
    }
    if( true ){
        yield ' World'
    }   
}

const generatorHello = helloWorld(); 
console.log( generatorHello.next().value );
console.log( generatorHello.next().value );
console.log( generatorHello.next().value );