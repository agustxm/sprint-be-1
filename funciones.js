function sumar(parametro1, parametro2){
    resultado = parametro1 + parametro2
    return resultado;
}

console.log(sumar(7,5));


let restar = function(parametro1, parametro2) {
    resultado = parametro1 - parametro2
    return resultado;    
}


console.log(restar);
console.log(restar(7,5));

let saludar = function() {
    return 'Hola';
}

console.log(saludar);
console.log(saludar());


let multiplicar = (parametro1, parametro2) => parametro1 * parametro2

console.log(multiplicar(7,5));

/* let multiplicar = (parametro1, parametro2) =>  { 
    instruccion 1
    instruccion 2
    otra instruccion
    return parametro1 * parametro2
console.log(multiplicar(7,5));
*/

let scope = "Soy global";

function testScope()  {
    let scope = "Soy local";
    console.log ('Adentro de la función: ' + scope);
}

testScope();
console.log('Afuera de la función: ' + scope);

