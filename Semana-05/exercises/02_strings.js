/*
* 2. Strings
*/
console.log('2. Strings');
/*
* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en
* mayúscula (utilizar toUpperCase).
*/
console.log('2a.');
var longWord = 'this line was in lowercase and now it is in uppercase';

console.log(longWord.toUpperCase());
/*
* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
* con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/
console.log('2b.');

var longWord2 = 'programmers';
var shortWord2 = longWord2.substring(0, 5);

console.log('The string: ' + longWord2 + ' has the first 5 characters: ' + shortWord2);

/*
* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
* con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/
console.log('2c.');

var longWord3 = 'Software Developer';
var shortWord3 = longWord3.substring(longWord3.length - 3, longWord3.length);

console.log('The string: ' + longWord3 + ' has the last 3 characters: ' + shortWord3);

/*
* d.Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
* con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en
* una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
*/
console.log('2d.');

var longWord4 = 'Here Comes The Sun';
var shortWord4 = longWord4.substring(0, 1).toUpperCase() + longWord4.substring(1, longWord4.length).toLowerCase();

console.log('The string: ' + longWord4 + ' has the first letter in uppercase only: ' + shortWord4);

/*
* e.Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
* Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/
console.log('2e.');

var longWord5 = 'Long sentence';
var spacePosition = longWord5.indexOf(' ') + 1;

console.log('The string: ' + longWord5 + ' has a space in the position: ' + spacePosition);

/*
* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún
* espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un
* nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás
* letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/
console.log('2f.');

var longWord6 = 'international championship';
var spacePosition6 = longWord6.indexOf(' ') + 1;
var WordResult = longWord6.substring(0, 1).toUpperCase() + longWord6.substring(1, spacePosition6).toLowerCase() +
longWord6.substring(spacePosition6, spacePosition6 + 1).toUpperCase() + longWord6.substring(spacePosition6 + 1,
longWord6.length).toLowerCase();

console.log('The string: ' + longWord6 + ' has the first letter of each word in uppercase: ' + WordResult);