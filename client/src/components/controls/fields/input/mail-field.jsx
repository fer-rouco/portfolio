import { useModel } from "../../../../contexts/model-context";
import InputField from "./input-field";
import modelHelper from "./model-helper";

function MailField({
  attr,
  value,
  label,
  errorLabel,
  onChange,
  required,
  validate
}) {
  const { getValue } = modelHelper({ modelState: useModel(), attr, value, onChange });
  
  return (
    <InputField 
      type='email'
      attr={attr}
      value={value}
      label={label}
      errorLabel={errorLabel || 'Please enter a valid email address.'}
      onChange={onChange}
      required={required}
      validate={validate}
      validationFn={() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(getValue()) }
    >
    </InputField>
  );
}

export default MailField;