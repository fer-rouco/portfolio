import React, { useState } from 'react';
import { FormProvider } from './form-context';
import SubmitButton from '../controls/buttons/submit-button';

const Form = ({ children, onSubmit }) => {
  const [validate, setValidate] = useState(false);

  const executeValidation = (event) => {
    event.preventDefault();
    setValidate(true);
    setTimeout(() => {
      setValidate(false);
    });
  };

  const handleOnValid = () => {
    onSubmit();
  }

  return (
    <FormProvider validate={validate} handleOnValid={handleOnValid} >
      <form onSubmit={executeValidation} noValidate>
        { children }
        { onSubmit && <SubmitButton></SubmitButton> }
      </form>
    </FormProvider>
  );
};

export default Form;