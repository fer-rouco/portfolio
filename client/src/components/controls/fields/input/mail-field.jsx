import InputField from "./input-field";

function MailField({ attr, value, label, errorLabel, onChange }) {
  return (
    <InputField type='email' attr={attr} value={value} onChange={onChange} label={label} errorLabel={errorLabel || 'Please enter a valid email address.'} ></InputField>
  );
}

export default MailField;