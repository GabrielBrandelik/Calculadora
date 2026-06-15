function insert (num) {
    var numero = document.getElementById ('reultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean () {
    document.getElementById('resultado').innerHTML =""
}
function back () {
    var numero = document.getElementById ('reultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring (0, resultado.length-1);
}