let arrs = [1,2,3, [1,2,3, [1,2,3]]];

console.log( arrs.flat() ); //Un nivel
console.log( arrs.flat(2) ); //Segundo nivel

let numeros = [1,2,3,4,5,6,7];
let numeroPorDos = numeros.flatMap( value => [[value, [value * 2]]] )
console.log( numeroPorDos );

// Eliminar espacios
let hello = '    Hello World ';

console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());
console.log(hello.trim());

// Try Catch: Ya no se necesita pasar el valor de Error ya que ya viene implicito
try {
    
} catch {
    console.log(error);
}

// Convertir un Array en un objeto
let entries = [['name', 'Brandon'],['age', 28]];
let entriesObj = Object.fromEntries( entries );
console.log( entriesObj );


// Symbol

let mySymbol = `My Symbol - Descripción`;
let symbol = Symbol( mySymbol );
console.log( symbol.description );