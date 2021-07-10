console.log('-----------------------------');

function esParDeclarada(numero) {
    return numero % 2 === 0;
}

const esParArrow = (numero) => numero % 2 === 0;

console.log(esParDeclarada(7));
console.log(esParArrow(7));

function calcular2(numero) {
    var numero = prompt("Ingrese un número");
    return numero * numero;    
}

console.log(calcular2());
alert(calcular2());

const calularFactorial = (numero) => {
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
    }
    return resultado;
}

let factorial = function(num){
    rdoFactorial = 1;
    for (i = num; i > 0; i--){
        rdoFactorial *= i;
    }
    return rdoFactorial;
};

console.log(factorial(5));