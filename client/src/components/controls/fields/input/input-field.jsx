import BaseField from "./base-field";
import "./input-field.scss";


function InputField({
  type,
  attr,
  value,
  label,
  errorLabel,
  onChange,
  required,
  validationFn
}) {
  return (
    <BaseField
      attr={attr}
      label={label}
      value={value}
      errorLabel={errorLabel}
      required={required}
      validationFn={validationFn}
    >
      <input id={`input-${attr}`} type={type} value={value} onChange={onChange} autoComplete="off" noValidate />
    </BaseField>
  );
}

export default InputField;