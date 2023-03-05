//Variables que almacenen tanto el valor introducido en el input como la operación
//seleccionda
var provisional = null;
var operacionAnterior = null;

//Funcion que calcula el valor anterior y el introducido
//Utilizaremos la variable global provisonal para alamacenar el valor provsional
function calcular(operacion) {

    //Creo una variable llamada input para almacenar el valor escrito en pantalla
    var input = Number(document.getElementById("pantalla").value);

    //Lo primero que hacemos es comprobar el valor de provisional. En caso de ser cero, 
    // le damos el valor introducido. De no serlo buscamos la operacion
    if (provisional == null) {
        provisional = input;
    } else {
        if (operacionAnterior == "suma") {

            //Suma
            provisional = mathSum(provisional, input);
        } else if (operacionAnterior == "resta") {

            //Resta
            provisional = mathRest(provisional, input);
        } else if (operacionAnterior == "multi") {

            //Multiplicación
            provisional = mathMult(provisional, input);
        } else if (operacionAnterior == "divis") {

            //Divisón
            provisional = mathDiv(provisional, input);
        } else  if( operacionAnterior == "igual"){
        }else{
            alert("Operación no admitida");
        }
    }
    operacionAnterior = operacion;
    document.getElementById("pantalla").value = null;
    console.log(provisional);
}

function mathSum(num1, num2) {
    var result = num1 + num2;
    return result;
}

function mathRest(num1, num2) {
    var result = num1 - num2;
    return result;
}

function mathMult(num1, num2) {
    var result = num1 * num2;
    return result;
}

//Vamos a establecer que en mi función para dividir no se pueda operar con 0
function mathDiv(num1, num2) {
    if (num1 && num2 == 0) {
        result = 0;
    } else {
        var result = num1 / num2;
    }
    return result;
}

//Creamos una función para obtener en el input el resultado final al pulsar "="
function igual() {

    var input = Number(document.getElementById("pantalla").value);
    console.log(input);
    if (operacionAnterior == "suma") {

        provisional = mathSum(provisional, input);
    } else if (operacionAnterior == "resta") {

        provisional = mathRest(provisional, input);
    } else if (operacionAnterior == "multi") {

        provisional = mathMult(provisional, input);
    } else if (operacionAnterior == "divis") {

        provisional = mathDiv(provisional, input);
    } else {
        alert("Operación no admitida");
    }
    document.getElementById("pantalla").value = parseFloat(provisional);
    operacionAnterior = "igual";
    provisional = null;
} 

//Funcion sin parametros de entrada que devuelve la calculadora a us estado inicial
function borrar() {
    document.getElementById("pantalla").value = null;
    provisional = null;
    operacionAnterior = null;

}