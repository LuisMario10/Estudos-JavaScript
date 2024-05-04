function falaOi() {
    console.log("Hello");
}

function geraNumeros() {
    return Math.random();
}

const somaNumeros = function (num1, num2) {
    return num1 + num2;
}

const subtraiNumeros = (n1, n2) => n1 - n2;

const calcula = n => {
    var num = geraNumeros();
    m = num * 20
    return m + n;
}

falaOi();
console.log(somaNumeros(12,21));
console.log(subtraiNumeros(43,32));
console.log(calcula(9));

