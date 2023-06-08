import { useEffect } from "react";
import { useForm } from "../../../containers/form-context";
import { useModel } from "../../../../contexts/model-context";
import "./base-field.scss";

function BaseField({
  children,
  attr,
  label,
  value,
  errorLabel,
  containerClass,
  required,
  validate,
  validationFn
}) {
  const { setFormValid, executeValidation } = useForm();
  const { initializeField, setValid, isValid } = useModel();

  useEffect(() => {
    initializeField && initializeField(attr);
  });

  useEffect(() => {
    if (!executeValidation && !validate) {
      return;
    }

    doValidate();
  }, [executeValidation, validate]);

  const doValidate = () => {
    let valid = false;
    if (validationFn) {
      valid = validationFn();
    }
    else if (required) {
      valid = Boolean(value.trim());
    }
    setValid(attr, valid);

    if (setFormValid) {
      setFormValid(valid)
    }
  }

  const hideRequiredAsterisk = () => {
    return (
      !required ||
      !isValueValid(attr) /*||
      (isValid(attr) && runValidation && Boolean(value.trim()))*/
    );
  }
  
  const isValueValid = (attr) => {
    return isValid && isValid(attr);
  }

  return (
    <div className={`input-container ${containerClass || ''}`} >
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