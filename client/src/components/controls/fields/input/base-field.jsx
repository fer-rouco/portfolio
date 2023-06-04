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
    initializeField(attr);
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


  return (
    <div className={`input-container ${containerClass}`} >
      <div className='label-container' >
        <label htmlFor={`input-${attr}`} >{label} :</label>
        <span className={`label-container__required ${(!required || !isValid(attr)) ? 'hide' : '' }`} >*</span>
        <span className={`label-container__error-label ${(isValid(attr)) ? 'hide' : '' }`} >{errorLabel || `Please enter your ${label.toLowerCase()}.`}</span>
      </div>
      {children}
    </div>
  );
}

export default BaseField;