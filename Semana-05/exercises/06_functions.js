/*
* 6.Funciones
*/
console.log('6.Functions');
/*
* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar
* la función y guardar el resultado en una variable, mostrando el valor de dicha variable en
* la consola del navegador.
*/
console.log('6a.');

function sum(a, b) {
    return a + b;
}

var result = sum(2, 3);
console.log(result);
/*
* b. A la función suma anterior, agregarle una validación para controlar si alguno de los
* parámetros no es un número; de no ser un número, mostrar una alerta aclarando que
* uno de los parámetros tiene error y retornar el valor NaN como resultado.
*/
console.log('6b.');

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('One of the parameters is not a number');
        return NaN;
    }
    return a + b;
}
/*
* c. Aparte, crear una función validate Integer que reciba un número como parámetro y
* devuelva verdadero si es un número entero.
*/
console.log('6c.');

function validateInteger(a) {
    return Number.isInteger(a);
}
/*
* d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y
* que valide que los números sean enteros. En caso que haya decimales mostrar un alerta
* con el error y retornar el número convertido a entero (redondeado).
*/
console.log('6d.');

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('One of the parameters is not a number');
        return NaN;
    }
    if (!validateInteger(a)) {
        alert('The first parameter is not an integer');
        a = Math.round(a);
    }
    if (!validateInteger(b)) {
        alert('The second parameter is not an integer');
        b = Math.round(b);
    }
    return a + b;
}
/*
* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la
* función suma probando que todo siga funcionando igual.
*/
console.log('6e.');

function validateInteger(a) {
    return Number.isInteger(a);
}

function validateNumber(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('One of the parameters is not a number');
        return NaN;
    }
    if (!validateInteger(a) || !validateInteger(b)) {
        alert('One of the parameters is not an integer');
        return Math.round(a) + Math.round(b);
    }
    return a + b;
}
