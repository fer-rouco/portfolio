import React, { useEffect, useState } from 'react';

const FormContext = React.createContext(() => {});

export function FormProvider(props) {
  const [fields, setFields] = useState([]);
  const [executeValidation, setExecuteValidation] = useState(props?.validate);
  const [formValid, setFormValid] = useState(undefined);

  const initializeField = (attr) => {
    addField(attr, true);
  }

  const addField = (attr, valid) => {
    const field = getField(attr);
    if (!field) {
      setFields([ 
        ...fields, 
        { attr, valid }
      ]);
    }
  }

  const getField = (attr) => {
    return fields.filter(field => field.attr === attr)[0];
  }

  const setValid = (attr, valid) => {
    const field = getField(attr);
    field.valid = valid;
    setFormValid(valid);
  }

  const isValid = (attr) => {
    const field = getField(attr);
    return field?.valid;
  }

  useEffect(() => {
    setExecuteValidation(props?.validate);
  }, [props?.validate]);

  useEffect(() => {
    if (formValid) {
      const fieldsValid = fields.length > 0 && !fields.some(field => !field.valid);
      if (fieldsValid) {
        props.handleOnValid();
      }
  
      setFormValid(undefined);
    }
  }, [formValid]);

  return <FormContext.Provider value={{ executeValidation, isValid, setValid, initializeField }} {...props} />;
}

export function useForm() {
  const context = React.useContext(FormContext);

  if (!context) {
    throw new Error('useForm should be inside the provider FormContext');
  }

  return context;
}
