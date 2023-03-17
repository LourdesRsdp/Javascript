var randomPick = (n, min, max) => {
    if(n > 1) {
        var result = [];

        for(i = 0; i < n; i++){
            var random; 
            while (true) {
                random = Math.floor(Math.random() * (max - min + 1) ) + min;
                if(!result.includes(random)){
                    break;
                }
            }
            result.push(random);
        }

        return result;
    } else {
        return "Numero no valido";
    }
}
