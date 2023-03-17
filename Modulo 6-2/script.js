var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function encrypt(){
    var plaintText = document.getElementById("PlainText").value;
    
    var result = "";
    for(i= 0; i< plaintText.length; i++){
        
        var letra = plaintText.charAt(i).toLowerCase();
        var position = plainAlphabet.indexOf(letra);
        var letraEncriptada = encryptedAlphabet.charAt(position);

        result += letraEncriptada;
    }

    document.getElementById("EncriptedText").value = result;
}

function decrypt(){
    var encryptedText = document.getElementById("EncriptedText").value;
    
    var result = "";
    for(i= 0; i< encryptedText.length; i++){
        
        var letraEncriptada = encryptedText.charAt(i);
        var position = encryptedAlphabet.indexOf(letraEncriptada);
        var letra = plainAlphabet.charAt(position);

        result += letra;
    }

    document.getElementById("PlainText").value = result;
}

