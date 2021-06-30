var botonCalcular = document.getElementById("button")

botonCalcular.addEventListener('click', function() {
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;
    numero1 = Number(numero1);
    numero2 = Number(numero2);

    if (numero1 > numero2) {
        console.log("El primer número es mayor que el segundo");
    } else if (numero1 < numero2) {
        console.log("El segundo número es mayor al primero")
    } else {
        console.log("Los dos números son iguales")
    }
});