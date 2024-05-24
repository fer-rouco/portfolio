import React, { useState } from 'react';

const ModelContext = React.createContext(() => {});

export function ModelProvider(props) {
  const [model, setModel] = props?.modelState;
  const [fields, setFields] = useState([]);

  const getFieldAttributeList = () => {
    return fields;
  }

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
  }

  const isValid = (attr) => {
    const field = getField(attr);
    return field?.valid;
  }


  return <ModelContext.Provider value={{ model, setModel, getFieldAttributeList, isValid, setValid, initializeField }} {...props} />;
}

export function useModel() {
  const context = React.useContext(ModelContext);

  if (!context) {
    throw new Error('useModel should be inside the provider ModelContext');
  }

  return context;
}
