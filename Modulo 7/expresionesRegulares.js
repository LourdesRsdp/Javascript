//Validar un IBAN

    //Caso 1 ES6600190020961234567890
    /^ES\d{22}$/

        var regex = /^ES\d{22}$/;
        var cadena = 'ES6600190020961234567890';
        regex.test(cadena);
        console.log(regex.test(cadena));

    //Caso 2 ES66 0019 0020 9612 3456 7890
    /^ES\d{2}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?|ES\d{22}$/

        var regex1 = /^ES\d{2}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?|ES\d{22}$/;
        var cadena1 = 'ES66 0019 0020 9612 3456 7890';
        regex1.test(cadena1);
        console.log(regex1.test(cadena1));

    //Caso 3 Código de País y dígito de control
    
        const regex2 = /^([A-Z]{2})?(\d{2})?(\s*\d{4}\s*){1,7}$/;
        var cadena2 = '0019 0020 9612 3456 7890';
        const valid = regex2.test(cadena2);
        console.log(regex2.test(cadena2));

//Validar matrícula

    //Caso 1

        const matricula = "2021 GMD";
        const regex3 = /^(\d{4}[\s-]?[A-Z]{3})$/;
        const isValid = regex3.test(matricula); 
        console.log(regex3.test(matricula));

    //Caso 2

    const matricula2 = "2021 GMD";
    const regex4 = /^(\d{4})[\s-]?([A-Z]{3})$/;
    const matches = matricula2.match(regex4);
    const parteNumerica = matches[1]; 
    const letras = matches[2];
    console.log(parteNumerica);
    console.log(letras);