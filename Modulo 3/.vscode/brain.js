//Ejercicio 1
const product = { count: 3, price: 12.55, type: "ropa" };


function getTotal(product) {
    if (product.count == 0) {
        return 0;
    }
    
    if (product.count < 0) {
        product.count = 0;
    }

    var result = product.count * product.price;
    return result;

}
//Ejercicio 2-2

function getVat(product) {
    var iva = 0;
    switch (product.type) {
        case "alimentacion":
            iva = 0.1;
            break;
        case "libro":
            iva = 0.04;
            break;
        default:
            iva = 0.21;
            break;
    }
    var productTotal = 0;
    productTotal = getTotal(product) * iva;

    return productTotal;
}

//testing
getTotal(product);

//Ejercicio Calcular sueldo neto
function sueldoNetoAnual(empleado) {
    console.log(empleado);
    var ret = 0;

    if (empleado.bruto < 12450) {
        ret = 0.095;
    }
    else if (empleado.bruto < 20199) {
        ret = 0.12;
    }
    else if (empleado.bruto < 35199) {
        ret = 0.15;
    }
    else if (empleado.bruto < 59999) {
        ret = 0.18;
    }
    else if (empleado.bruto < 299999) {
        ret = 0.22;
    }
    else {
        0.245;
    }
    console.log(ret);

    if (empleado.hijo > 0){
        ret - 0.2;
    }
    var result1 = empleado.bruto * ret;
    var result2 = empleado.bruto - (result1 - empleado.hijos);
    console.log(result2);
    return result2;
}

function sueldoNetoMensual(empleado) {

    var result = sueldoNetoAnual(empleado) / empleado.pagas;
    console.log(result);
    return result;

}




