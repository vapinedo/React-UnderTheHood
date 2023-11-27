var list = document.getElementById("list");
var boton = document.getElementById("button");

function agregarLi() {
    var nuevoLi = document.createElement("li");
    nuevoLi.innerText = "Item 4";
    list.appendChild(nuevoLi);
};

boton.addEventListener("click", agregarLi);

var listaDeNumeros = [4, 5, 8, 7, 10];

function sacarParesEImpares(arrayDeNumeros) {
    var pares = [];
    var impares = [];

    for (var iterar = 0; iterar < arrayDeNumeros.length; iterar++) {
        var numero = arrayDeNumeros[iterar];
        if (numero % 2 === 0) {
            pares.push(numero);
        } else {
            impares.push(numero);
        }
    }
    return { pares, impares };
}

var { pares, impares } = sacarParesEImpares(listaDeNumeros);
console.log(pares);
console.log(impares);


var nuevoArray = [11, 20];
console.log(sacarParesEImpares(nuevoArray));