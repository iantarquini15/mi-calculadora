//Funciones representativas
function calcular(resultado) {
    document.getElementById('ResultadoFinal').value = resultado;
}
function calcularSuma() {
    var numMinimo = +document.getElementById('minimo').value;
    var numMaximo = +document.getElementById('maximo').value;
    return calcular(numMinimo + numMaximo);
}
function calcularResta() {
    var numMinimo = +document.getElementById('minimo').value;
    var numMaximo = +document.getElementById('maximo').value;
    return calcular(numMinimo - numMaximo);
}
function calcularMultiplicacion() {
    var numMinimo = +document.getElementById('minimo').value;
    var numMaximo = +document.getElementById('maximo').value;
    return calcular(numMinimo * numMaximo);
}
function calcularDivision() {
    var numMinimo = +document.getElementById('minimo').value;
    var numMaximo = +document.getElementById('maximo').value;
    return calcular(numMinimo / numMaximo);
}
function calcularPotencia() {
    var numMinimo = +document.getElementById('minimo').value;
    var numMaximo = +document.getElementById('maximo').value;
    return calcular(Math.pow(numMinimo,numMaximo));
}
function calcularRaizCuadrada() {
    var numMinimo = +document.getElementById('minimo').value;
    var numMaximo = +document.getElementById('maximo').value;
    return calcular(Math.sqrt(numMaximo));
}
function calcularAbsoluto() {
    var numMinimo = +document.getElementById('minimo').value;
    var numMaximo = +document.getElementById('maximo').value;
    return calcular(Math.abs(numMaximo));
}
function calcularRandom() {
    var numMinimo = +document.getElementById('minimo').value;
    var numMaximo = +document.getElementById('maximo').value;
    return calcular(Math.random()*(numMaximo - numMinimo) + numMinimo);
}
function redondear() {
     var total = document.getElementById('ResultadoFinal').value
    return calcular(Math.round(total));
}
function redondeoPiso() {
    var total = document.getElementById('ResultadoFinal').value
    return calcular(Math.floor(total));
}
function ceil() {
    var total = document.getElementById('ResultadoFinal').value
    return calcular(Math.ceil(total));
}


