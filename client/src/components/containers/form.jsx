import React, { useState } from 'react';
import { FormProvider } from './form-context';

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
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;