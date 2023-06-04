import InputField from "./input-field";

function MailField({
  attr,
  value,
  label,
  errorLabel,
  onChange,
  required 
}) {
  return (
    <InputField 
      type='email'
      attr={attr}
      value={value}
      label={label}
      errorLabel={errorLabel || 'Please enter a valid email address.'}
      onChange={onChange}
      required={required} 
      validationFn={() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) }
    >
    </InputField>
  );
}

export default MailField;