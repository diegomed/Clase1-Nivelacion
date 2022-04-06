var nombre = 'Diego';
let apellido = 'Medina';
const EDAD = 29;

const obj = {
    nombre: 'Diego',
    edad: 29
}

obj['nombre'] = 'asdf';

console.log(nombre + apellido);

if (true) {

    var nombre = 'asdf';
    let apellido = 'zxcv';
    console.log(nombre);
    console.log(apellido);
    console.log(EDAD);
}


console.log(nombre);
console.log(apellido);

const sum = (a, b) => {
    return a + b;
};
console.log(sum(1, 2));

console.log(EDAD === 28 ? 'Correcto' : 'Incorrecto');


var arr = [1,2,3,4,5];

const [a,b,c,d,e] = arr;

var spread = [...arr, 6, 7, 8, 9];

console.log(spread);

function rest(...args) {
    console.log(args);
}

rest(1,2,3,4);

let string1 = 'Feliz cumple ' + nombre + ' ' + apellido;

let string2 = `Feliz cumple ${nombre} ${apellido}`;

nombre = 'Diego';
console.log(nombre || 'coder');