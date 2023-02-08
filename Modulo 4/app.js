function showResult(button) {
    var valueOpa = document.getElementById(a).value;
    var valueOpb = document.getElementById(b).value;


    if (button.name = suma) {
        mathSum(a, b);
    }else if (button.name = resta) {
        mathRest(a, b);
    }else if (button.name = multi) {
        mathMult(a, b);
    }else mathDiv(a, b);
}

function mathSum(a, b) {

    var result = a + b;
    
    console.log(result);

    return result;
}


function mathRest(a, b) {

    var result = a - b;
    
    console.log(result);

    return result;
}


function mathMult(a, b) {
    
    var result = a * b;

    console.log(result);

    return result;
}


function mathDiv(a, b) {

    var result = a / b;

    console.log(result);

    return result;
}