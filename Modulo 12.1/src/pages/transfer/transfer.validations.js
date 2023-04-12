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


const validationSchema = {
  field: {
    select_account: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      }
    ],
    iban: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^([A-Z]{2})?(\d{2})?(\s*\d{4}\s*){1,7}$/},
        message: 'Introduzca un formato IBAN válido',
      }
    ],
    name: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      }
    ],
    amount: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 1 },
        message: 'Campo requerido',
      }
    ],
    concept: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      }
    ],
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
    day: [
      {
        validator: minNumberValidator,
        customArgs: { min: 1 },
        message: 'Campo requerido',
      },
      {
        validator: maxNumberValidator,
        customArgs: { max: 31 },
        message: 'Campo requerido',
      }
    ],
    month: [
      {
        validator: minNumberValidator,
        customArgs: { min: 1 },
        message: 'Campo requerido',
      },
      {
        validator: maxNumberValidator,
        customArgs: { max: 12 },
        message: 'Campo requerido',
      }
    ],
    year: [
      {
        validator: minNumberValidator,
        customArgs: { min: 2023 },
        message: 'Campo requerido',
      },
      {
        validator: maxNumberValidator,
        customArgs: { max: 3000 },
        message: 'Campo requerido',
      }
    ],
  },
};



export const formValidation = createFormValidation(validationSchema);