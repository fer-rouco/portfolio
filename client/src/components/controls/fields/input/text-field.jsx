import InputField from "./input-field";

function TextField({
  attr,
  value,
  label,
  errorLabel,
  onChange,
  required,
  validate
}) {
  return (
    <InputField
      type='text'
      attr={attr}
      value={value}
      label={label}
      errorLabel={errorLabel}
      onChange={onChange}
      required={required}
      validate={validate}
    >
    </InputField>
  );
}

export default TextField;