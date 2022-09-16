/*
* 3.Arrays
*/
console.log('3. Arrays');
/*
* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
* "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
*/
console.log('3a.');

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
'November', 'December'];

console.log('the fifth months is ' + months[4]);
console.log('the eleventh months is ' + months[10]);

/*
* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*/
console.log('3b.');

months.sort();
console.log(months);

/*
*c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/
console.log('3c.');

months.unshift('Osvald');
months.push('Edward');

console.log(months);

/*
* d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/
console.log('3d.');

months.shift();
months.pop();

console.log(months);

/*
* e. Invertir el orden del array (utilizar reverse).
*/
console.log('3e.');

months.reverse();

console.log(months);

/*
* f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
*/
console.log('3f.');

console.log(months.join('-'));

/*
* g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/
console.log('3g.');

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
'November', 'December'];

var monthsCopy = months.slice(4, 11);

console.log(monthsCopy);