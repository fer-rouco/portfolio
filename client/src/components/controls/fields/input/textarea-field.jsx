import { useModel } from "../../../../contexts/model-context";
import BaseField from "./base-field";
import modelHelper from "./model-helper";
import "./textarea-field.scss";

function TextAreaField({
  attr,
  value,
  label,
  errorLabel,
  onChange,
  required,
  validate,
  cols,
  rows
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
      containerClass='textarea-container'
    >
      <textarea id={`input-${attr}`} value={getValue()} onChange={onValueChange} cols={cols} rows={rows} autoComplete="off" noValidate />
    </BaseField>
  );
}

export default TextAreaField;