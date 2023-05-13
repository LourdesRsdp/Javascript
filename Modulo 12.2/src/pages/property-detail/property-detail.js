import { history } from '../../core/router/history';
import { getProperty } from "./property-detail.api";
import { setPropertyValues } from "./property-detail.helpers";
import { mapPropertyFromApiToViewModel } from "./property-detail.mappers";
import { getEquipments } from "../property-list/property-list.api";
import { onUpdateField, onSubmitForm } from "../../common/helpers";
import { formValidation } from "./property-detail.validations";
import { onSetFormErrors,onSetError } from "../../common/helpers/element.helpers";
import { insertQuestion } from "./property-detail.api";
const params = history.getParams();
const existsProperty = Boolean(params.id);

if (existsProperty) {
    //Obtengo properties

    getProperty(params.id).then(apiProperty => {

        getEquipments().then(equipmentList => {

            let property = mapPropertyFromApiToViewModel(apiProperty, equipmentList);
            console.log(property);
            setPropertyValues(property);
        });
    });

}

let question = {
    email: '',
    message: ''
};

onUpdateField('email', event => {
    const value = event.target.value;
    question = {
        ...question,
        email: value,
    };

    formValidation.validateField('email', question.email).then(result => {
        onSetError('email', result);
    });
});

onUpdateField('message', event => {
    const value = event.target.value;
    question = {
        ...question,
        message: value,
    };

    formValidation.validateField('message', question.message).then(result => {
        onSetError('message', result);
    });
});

onSubmitForm('contact-button', () => {
     formValidation.validateForm(question).then(result => {
        console.log(result);
        onSetFormErrors(result);
        if (result.succeeded) {
            question.id = '';
            insertQuestion(question).then(response => {
                console.log(response);
            });
        }
    });
});



