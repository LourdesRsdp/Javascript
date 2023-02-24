function showResult(buttonName) {
   
    var valueOpa = document.getElementById("a").value;
    var valueOpb = document.getElementById("b").value;

    if (Number(valueOpa) && Number(valueOpb)) {
       
        if (buttonName == "suma") {
            mathSum(Number(valueOpa), Number(valueOpb));
        }else if (buttonName == "resta") {
            mathRest(Number(valueOpa), Number(valueOpb));
        }else if (buttonName == "multi") {
            mathMult(Number(valueOpa), Number(valueOpb));
        }else if(buttonName == "divis"){
            mathDiv(Number(valueOpa), Number(valueOpb));
        }
    }   else {
        alert("Error : debe insertar un parámetro en cada input");
    }
        

    

   
}

function mathSum(a, b) {

    
    var result = a + b;
    
    document.getElementById("c").value = result;
    console.log(result);

    return result;
}


function mathRest(a, b) {

    var result = a - b;
    document.getElementById("c").value = result;
    console.log(result);

    return result;
}


function mathMult(a, b) {
    
    var result = a * b;
    document.getElementById("c").value = result;
    console.log(result);

    return result;
}


function mathDiv(a, b) {

    var result = a / b;
    document.getElementById("c").value = result;
    console.log(result);

    return result;
}

function igual(){
    
}