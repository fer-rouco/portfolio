import React, { useState } from 'react';
import { FormProvider } from './form-context';
import SubmitButton from '../controls/buttons/submit-button';

const Form = ({ children, onSubmit, modelState }) => {
  const [validate, setValidate] = useState(false);

  const executeValidation = (event) => {
    event.preventDefault();
    setValidate(true);
    setTimeout(() => {
      setValidate(false);
    });
  };

  const handleOnValid = (model) => {
    onSubmit(model);
  }

  return (
    <FormProvider validate={validate} handleOnValid={handleOnValid} modelState={modelState} >
      <form onSubmit={executeValidation} noValidate>
        { children }
        { onSubmit && <SubmitButton></SubmitButton> }
      </form>
    </FormProvider>
  );
};

export default Form;