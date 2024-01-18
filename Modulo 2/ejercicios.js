//---------- EXPLICACION INICIAL ----------
console.log('mi primera linea de codigo');

let numero_1 = 7;
numero_1 += 3;
console.log('El valor del numero 1 es: ', numero_1);

let persona = {
    nombre: 'Darío',
    edad: 34,
    ciudad: 'Manizales'
}
console.log('El nombre de la persona es: ', persona.nombre);

//---------- TALLER -------------
let nombre = 'Darío Gómez';
console.log('Nombre: ', nombre);
let edad = 34;
console.log('Edad: ', edad);
let ciudad = 'Manizales';
console.log('Ciudad: ', ciudad);

let resultado = 5 * (3 + 2) / 2
console.log('Resultado: ', resultado);

let frase_1 = 'Estamos en el diplomado FullStack';
let frase_2 = 'en el modulo 2 de Javascript';
console.log('Frase completa ', frase_1+frase_2);

let automovil = {
    marca: 'Suzuki',
    modelo: 'live',
    año: 2018
}
console.log('Datos automovil: ', automovil);


//--------- OPERADORES MATEMATICOS -----------
const numero = 10.8;
const numero_2 = 2.6;

const suma = numero + numero_2;
console.log('Suma: ', suma);

const resta = numero - numero_2;
console.log('Resta: ', resta);

const multiplicacion = numero * numero_2;
console.log('Multiplicación: ', multiplicacion);

const division = numero / numero_2;
console.log('Division: ', division);

let a = 10;
let b = 10;
let c = 10;
let operacion = (a+b)*c;
console.log('Resultado operacion: ', operacion);


//----------- CONDICIONALES ---------------
let numero_3 = 10;

if (numero_3 > 0){
    console.log('El numero es positivo');
} else if (numero_3 < 0){
    console.log('El numero es negativo');
} else {
    console.log('El numero es cero');
}

let par = numero_3 % 2 === 0 ? 'es par' : 'es impar'
console.log('El numero ', par);
