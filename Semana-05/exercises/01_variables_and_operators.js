/*
* 1. Variables y Operadores
*/
console.log('1. Variables y Operadores');
/*
* a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la
* suma de ambos números en una 3er variable.
*/
console.log('1a.');
var numberA = 10;
var numberB = 20;

var numberC = numberA + numberB;
console.log('The result of adding the numberA: ' + numberA + ' and the numberB:' 
+ numberB + ' is the numberC: ' + numberC);
/*
* b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er
* variable.
*/
console.log('1b.');
var myName = 'Daniel';
var lastName = 'Vinzia';

var fullName = myName + " " + lastName;
console.log('My full name is: ' + fullName);

/*
* c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras
* del string) guardando el resultado de la suma en una 3er variable (utilizar length).
*/
console.log('1c.');
var fruit = "apple";
var vegetable = "tomato";

var fruitAndVegetable = fruit.length + vegetable.length;
console.log('The length of the fruit: ' + fruit + ' and the vegetable: ' + vegetable + ' is: ' + fruitAndVegetable);