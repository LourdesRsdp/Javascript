import { getAccount } from '../account/account.api';
import { mapAccountFromApiToViewModel } from '../account/account.mappers';
import { history } from '../../core/router';
import { setAccountOptions } from "./transfer.helpers";
import {
    onUpdateField,
    onSubmitForm,
    onSetError,
    onSetFormErrors,
} from '../../common/helpers';
import { formValidation } from './transfer.validations';
import { getAccountList } from '../account-list/account-list.api';
import { insertTransfer } from "./trasnfer.api";
import { mapAccountListFromApiToViewModel } from '../account-list/account-list.mappers';

const params = history.getParams();
const existsAccount = Boolean(params.id);

let transfer = {
    select_account: '',
    iban: '',
    name: '',
    amount: '',
    concept: '',
    notes: '',
    day: '',
    month: '',
    year: '',
    email: '',
};

onUpdateField('select-account', event => {
    const value = event.target.value;
    transfer = {
      ...transfer,
      select_account: value,
    };
  
    formValidation.validateField('select_account', transfer.select_account).then(result => {
      onSetError('select-account', result);
    });
});

onUpdateField('iban', event => {
    const value = event.target.value;
    transfer = {
      ...transfer,
      iban: value,
    };
  
    formValidation.validateField('iban', transfer.iban).then(result => {
      onSetError('iban', result);
    });
});

onUpdateField('name', event => {
    const value = event.target.value;
    transfer = {
      ...transfer,
      name: value,
    };
  
    formValidation.validateField('name', transfer.name).then(result => {
      onSetError('name', result);
    });
});

onUpdateField('amount', event => {
    const value = event.target.value;
    transfer = {
      ...transfer,
      amount: value,
    };
  
    formValidation.validateField('amount', transfer.amount).then(result => {
      onSetError('amount', result);
    });
});

onUpdateField('concept', event => {
    const value = event.target.value;
    transfer = {
      ...transfer,
      concept: value,
    };
  
    formValidation.validateField('concept', transfer.concept).then(result => {
      onSetError('concept', result);
    });
});

onUpdateField('notes', event => {
    const value = event.target.value;
    transfer = {
      ...transfer,
      notes: value,
    };
  
});
onUpdateField('day', event => {
    const value = event.target.value;
    // login.user = value;
    transfer = {
      ...transfer,
      day: value,
    };
  
    formValidation.validateField('day', transfer.day).then(result => {
      onSetError('day', result);
    });
});

onUpdateField('month', event => {
    const value = event.target.value;
    transfer = {
      ...transfer,
      month: value,
    };
  
    formValidation.validateField('month', transfer.month).then(result => {
      onSetError('month', result);
    });
});

onUpdateField('year', event => {
    const value = event.target.value;
    transfer = {
      ...transfer,
      year: value,
    };
  
    formValidation.validateField('year', transfer.year).then(result => {
      onSetError('year', result);
    });
});

onUpdateField('email', event => {
    const value = event.target.value;
    transfer = {
      ...transfer,
      email: value,
    };
  
    formValidation.validateField('email', transfer.email).then(result => {
      onSetError('email', result);
    });
});
  

if(existsAccount == true){
    getAccount(params.id).then(apiAccount => {
        let account = mapAccountFromApiToViewModel(apiAccount);

        setAccountOptions([account], false);
    });
} else {
    getAccountList().then(accountList => {
        const viewModelAccountList = mapAccountListFromApiToViewModel(accountList);
        setAccountOptions(viewModelAccountList, false);
      
        
      });
}

onSubmitForm('transfer-button', () => {
    formValidation.validateForm(transfer).then(result => {
        console.log(result);
        onSetFormErrors(result);
        if (result.succeeded) {
            console.log("Entra");
            transfer.id = '';
            insertTransfer(transfer).then(response => {
                history.back();
            });
        }
    });
  });
