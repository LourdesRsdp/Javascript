import { getMovements, getMovementsFromAccount } from './movements.api';
import { addMovementRows } from './movements.helpers';
import { mapMovementsFromApiToViewModel } from './movements.mappers';
import { history } from '../../core/router';
import {
    mapAccountFromApiToViewModel,
    mapAccountFromViewModelToApi,
  } from '../account/account.mappers';

import { getAccount } from '../account/account.api';


const params = history.getParams();
const existsAccount = Boolean(params.id);

let viewModelMovements;
console.log(existsAccount);
if(existsAccount){
    //Obtengo los movimientos
    getMovements().then(movs => {
        let movements = [];

        movs.forEach(movement => {
            if (movement.accountId == params.id){
                movements.push(movement);
            }
        })
        
        viewModelMovements = mapMovementsFromApiToViewModel(movements);
        addMovementRows(viewModelMovements);
    }); 

    //obtengo el account
    getAccount(params.id).then(apiAccount => {
        let account = mapAccountFromApiToViewModel(apiAccount);
        console.log(account);

        let aliasDOM = document.getElementById("alias");
        aliasDOM.innerHTML = account.alias;

        let IBANDOM = document.getElementById("iban");
        IBANDOM.innerHTML = account.iban;

        let saldoDOM = document.getElementById("balance");
        saldoDOM.innerHTML = account.balance;
        //onSetValues(account);
    });

} else {
    getovements().then(movements => {
        console.log(movements); 
        viewModelMovements = mapMovementsFromApiToViewModel(movements);
        addMovementRows(viewModelMovements);
    }); M
}

