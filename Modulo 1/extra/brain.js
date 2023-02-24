
function myfunction() {
    console.log("Mensaje de saludo");
}

function myfunction2() {
    var mensaje = document.getElementById("show").value;
    console.log(mensaje);
}

function myfunction3() {
    var message = ("Lourdes");
    document.getElementById("nombre").value = message;
}

function myfunction4() {
    var changeBoton = document.getElementById("showMe").value;
    document.getElementById("parrafo").innerHTML = changeBoton;
}

function myfunction5() {
    var botonName = document.getElementById("caja").value;
    document.getElementById("boton").innerHTML = botonName;
}

function myfunction6() {
    var foto = "https://i.blogs.es/594843/chrome/450_1000.jpg";
    document.getElementById("picture").src = foto;
    
}