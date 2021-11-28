let numbers = [1,2,3,5,6,8,4,6,8,5,7,1 ];
let valor = 8;

if( numbers.includes( valor ) ){ //includes: devueve un boolean
    console.log(numbers.includes( valor ), `: ${ valor } encontrado.`);
}else{
    console.log(numbers.includes( valor ), `: No se encontro el valor ${ valor }`);
}


let base = 4;
let exponet = 4;

let result = base ** exponet;

console.log(result);
