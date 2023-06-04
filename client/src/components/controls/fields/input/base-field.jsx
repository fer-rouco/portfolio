import { useEffect } from "react";
import { useForm } from "../../../containers/form-context";
import "./base-field.scss";

function BaseField({
  children,
  attr,
  label,
  value,
  errorLabel,
  containerClass,
  required,
  validationFn
}) {
  const { executeValidation, initializeField, setValid, isValid } = useForm();

  useEffect(() => {
    initializeField && initializeField(attr);
  });

  useEffect(() => {
    if (!executeValidation) {
      return;
    }

    if (validationFn) {
      setValid(attr, validationFn());
    }
    else if (required) {
      setValid(attr, Boolean(value.trim()));
    }
  }, [executeValidation]);

  const hideRequiredAsterisk = () => {
    return (
      !required ||
      !isValueValid(attr) /*||
      (isValid(attr) && executeValidation && Boolean(value.trim()))*/
    );
  }
  
  const isValueValid = (attr) => {
    return isValid && isValid(attr);
  }

  return (
    <div className={`input-container ${containerClass}`} >
      <div className='label-container' >
        <label htmlFor={`input-${attr}`} >{label} :</label>
        <span className={`label-container__required ${ hideRequiredAsterisk() ? 'hide' : '' }`} >*</span>
        <span className={`label-container__error-label ${(isValueValid(attr)) ? 'hide' : '' }`} >{errorLabel || `Please enter your ${label.toLowerCase()}.`}</span>
      </div>
      {children}
    </div>
  );
}

export default BaseField;