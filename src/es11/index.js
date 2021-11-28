
// === === === Laziload === === ===

const button = document.getElementById('btn');

button.addEventListener( 'click', async function(){
    const module = await import('./file.js');
    module.hello();
});



// === === === big Number === === ===

const bigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(bigNumber);
console.log(anotherBigNumber);



// === === === Promesas === === ===

const promiseOne = new Promise(( resolve, reject )=>{
    reject('Promise One rechazada')
})

const promiseTwo = new Promise(( resolve, reject )=>{
    resolve('Se resolvio la Promise Two')
})

const promiseThree = new Promise(( resolve, reject )=>{
    reject('Promise Three rechazada')
})
// all: Resuelve varias promesas, pero en cuanto se rechase una, esta termina el proceso
// allSettled: Se ejecuta al teminar las promesas sin importar si esta se rechazan o resuelven
Promise.allSettled([ promiseOne, promiseTwo, promiseThree ])
    .then( resp => console.log( resp ) )




// === === === Global this === === ===

console.log(window);
console.log(globalThis);




// === === === operador ??: se ejecuta cuando el valor es null y asigna un valor por defecto. === === ===
const fooo = 'Hola mundo' ?? 'default string';
console.log(fooo);


// === === ===operador ? : pregunta si la refencia existe y no rompe nuestra ejecucion, solo devuelve undefined si la propiedad no exite === === ===
const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log( user.profile.email );
}else{
    console.log('La propiedad no fue encontrada');
}