import React, { useEffect, useState } from 'react';
import { useModel } from '../../contexts/model-context';

const FormContext = React.createContext(() => {});

export function FormProvider(props) {
  const [executeValidation, setExecuteValidation] = useState(props?.validate);
  const [formValid, setFormValid] = useState(undefined);
  const { model, getFieldAttributeList } = useModel();

  useEffect(() => {
    setExecuteValidation(props?.validate);
  }, [props?.validate]);

  useEffect(() => {
    if (formValid) {
      const fieldAttributeList = getFieldAttributeList();
      const fieldsValid = fieldAttributeList.length > 0 && !fieldAttributeList.some(fieldAttribute => !fieldAttribute.valid);
      if (fieldsValid) {
        props.handleOnValid(model);
      }
  
      setFormValid(undefined);
    }
  }, [formValid]);

  return <FormContext.Provider value={{ executeValidation, setFormValid }} {...props} />;
}

export function useForm() {
  const context = React.useContext(FormContext);

  if (!context) {
    throw new Error('useForm should be inside the provider FormContext');
  }

  return context;
}
