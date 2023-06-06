import React, { useState } from 'react';
import { FormProvider } from './form-context';
import SubmitButton from '../controls/buttons/submit-button';
import { ModelProvider } from '../../contexts/model-context';

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
    <ModelProvider modelState={modelState} >
      <FormProvider validate={validate} handleOnValid={handleOnValid} >
        <form onSubmit={executeValidation} noValidate>
          { children }
          { onSubmit && <SubmitButton></SubmitButton> }
        </form>
      </FormProvider>
    </ModelProvider>
  );
};

export default Form;