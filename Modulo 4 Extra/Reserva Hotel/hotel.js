//Creamos una funcion para obtener la tarifa final

//Creamos una variable accesible a todo el codigo del precio base de "tarifa+spa"

var noche;

function calcular() {
    //Como primer paso calculamos la tarifa de habitacion por noche
    //para ello creamos una funcion
    var tarifa = getTarifa();
     
    //Segundo:verificar la seleccion del spa, de nuevo creamos otra funcion
    tarifa = getSpa(tarifa);
     
    
    //Tercer: modificar precio segun la ocupacion elegida, nueva funcion
    tarifa = getOcupacion(tarifa);
     

    //Cuarto: calcular precio de las noches de parking si se han seleccionado, nueva funcion
    tarifa = getParking(tarifa);
     
    
    document.getElementById("resultado").value = tarifa;
}

function getParking(tarifa) {
    var nochesParking = parseFloat(document.getElementById("nochesParking").value);
    
    var precioParking = nochesParking * 10;
    
    return tarifa + precioParking;
}

function getOcupacion(tarifa) {
    var ocupacion = document.getElementById("ocupacion").value;

    var noches = parseFloat(document.getElementById("noches").value);

    switch (ocupacion) {
        case ("Individual"):
            var descuento = tarifa * 0.25 * (-1);
            return (tarifa + descuento) * noches;
        case ("Triple"):
            var descuento = tarifa * 0.25;
            return (tarifa + descuento) * noches;
        default:
            return tarifa;
    }
} 


function getSpa(tarifa) {
    var spa = document.getElementById("spa");
    if (spa.checked) {
        return tarifa + 20;
    } else {
        return tarifa;
    }
}

//Funcion sin parametros de entrada, que devuelve la tarifa BASE según el tipo de habitacion
function getTarifa() {
    tarifa = document.getElementById("habitacion").value;
    switch (tarifa) {
        case ("Standard"):
            return 100;
        case ("Junior Suite"):
            return 120;
        default:
            return 150;
    }
}