import { Validators, createFormValidation } from '@lemoncode/fonk';

const minNumberValidator = fieldValidatorArgs => {
  const {value} = fieldValidatorArgs;

  const validationResult = {
    succeeded: false,
    type: 'MY_MIN_NUMBER_VALIDATOR',
    message: 'Min number required'
  }
  console.log(value);
  if(value >= fieldValidatorArgs.customArgs.min || value == ""){
    validationResult.succeeded = true;
  }
  return validationResult;
}

const maxNumberValidator = fieldValidatorArgs => {
  const {value} = fieldValidatorArgs;

  const validationResult = {
    succeeded: false,
    type: 'MY_MAX_NUMBER_VALIDATOR',
    message: 'Max number required'
  }

  if(value <= fieldValidatorArgs.customArgs.max){
    validationResult.succeeded = true;
  }

  return validationResult;
}

const isPhoneNumberValidator = fieldValidatorArgs => {
  const {value} = fieldValidatorArgs;

  const validationResult = {
    succeeded: false,
    type: 'MY_MAX_NUMBER_VALIDATOR',
    message: 'Max number required'
  }

  if(value <= fieldValidatorArgs.customArgs.max){
    validationResult.succeeded = true;
  }

  return validationResult;
}


const validationSchemaGeneral = {
  field: {
    title: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      }
    ],
    notes: [],
    email: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.email,
        message: 'Introduzca un mail válido',
      }
    ],
    phone: [
        {
            validator: Validators.required,
            message: 'Campo requerido',
        },
        {
          validator: Validators.pattern,
          customArgs: { pattern: /^[6]\d{8}$/},
          message: 'Introduzca un telefono válido',
        }
    ],
    price: [
        {
            validator: Validators.required,
            message: 'Campo requerido',
        }
    ]
  },
};

const validationSchemaVivienda = {
  field: {
    address: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      }
    ],
    city: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      }
    ],
    provinceId: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      }
    ]
  },
};



export const formValidationGeneral = createFormValidation(validationSchemaGeneral);
export const formValidationVivienda = createFormValidation(validationSchemaVivienda);
/* export const formValidationFoto = createFormValidation(validationSchema); */