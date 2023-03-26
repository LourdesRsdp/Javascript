var dinero = [200, 100, 50, 20, 10, 5, 2, 1, 0.5 , 0.2, 0.1, 0.05, 0.02, 0.01];

function calculoCambio() {
    let result = [];
    var entrega = Number(document.getElementById("entrega").value);
    var importe = Number(document.getElementById("importe").value);
    //100
    //3
    cambio = entrega - importe;
    
    if( importe > entrega){
        alert("GILIPOLLAS");
    } else {
        index = 0;
        while (cambio != 0) {
            var billete = dinero[index];
            
            if(billete < cambio){
    
                while (billete <= cambio) {
                
                    result.push(billete);
                    
                    cambio -= billete;
                }
    
            }
    
            index++;
    
        }
    
        console.log(result);
        document.getElementById("idresultdo").innerHTML = result;
    }
    

}
