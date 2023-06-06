import { useModel } from "../../../../contexts/model-context";
import BaseField from "./base-field";
import "./input-field.scss";
import modelHelper from "./model-helper";


function InputField({
  type,
  attr,
  value,
  label,
  errorLabel,
  onChange,
  required,
  validate,
  validationFn
}) {
  const { onValueChange, getValue } = modelHelper({ modelState: useModel(), attr, value, onChange });

  return (
    <BaseField
      attr={attr}
      label={label}
      value={getValue()}
      errorLabel={errorLabel}
      required={required}
      validate={validate}
      validationFn={validationFn}
    >
      <input id={`input-${attr}`} type={type} value={getValue()} onChange={onValueChange} autoComplete="off" noValidate />
    </BaseField>
  );
}

export default InputField;