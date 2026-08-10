function insert(num) {
    var resultado = document.getElementById('resultado');
    if (resultado.innerHTML === "Nada para calcular") {
        resultado.innerHTML = "";
    }
    resultado.innerHTML += num;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado && resultado !== "Nada para calcular") {
        try {
            document.getElementById('resultado').innerHTML = eval(resultado);
        } catch (e) {
            document.getElementById('resultado').innerHTML = "Erro";
        }
    } else {
        document.getElementById('resultado').innerHTML = "Nada para calcular";
    }
}