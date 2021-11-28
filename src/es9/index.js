const objPerson = {
    name: 'Brandon',
    lastName: 'Hernandez',
    age: 28,
    country: 'MX'
}

const { name, ...details } = objPerson;
console.log(name);
console.log(details);


const objEmployee = {
    ...objPerson,
    rol: 'Full Stack Developer'
}

console.log( 'Employe: ', objEmployee);

// Promise - Finally
const helloPromise = ()=>{
    return new Promise( ( resolve, reject )=>{
        (true)
            ? resolve('Hello world')
            : reject ( new Error('Test error de la promesa') )
    })
}

helloPromise()
    .then( console.log )
    .catch( console.log )
    .finally( console.log('No se si se resolvio o hubo un error, pero Finalizo la promesa') )



// Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]
console.log({year, month, day});
