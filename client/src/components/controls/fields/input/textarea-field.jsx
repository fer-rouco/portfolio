import BaseField from "./base-field";
import "./textarea-field.scss";

function TextAreaField({
  attr,
  value,
  label,
  errorLabel,
  onChange,
  required,
  cols,
  rows
}) {
  return (
    <BaseField
      attr={attr}
      label={label}
      value={value}
      errorLabel={errorLabel}
      required={required}
      containerClass='textarea-container'
    >
      <textarea id={`input-${attr}`} value={value} onChange={onChange} cols={cols} rows={rows} autoComplete="off" noValidate />
    </BaseField>
  );
}

export default TextAreaField;