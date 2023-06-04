import { useForm } from "../../../containers/form-context";
import InputField from "./input-field";

function MailField({
  attr,
  value,
  label,
  errorLabel,
  onChange,
  required 
}) {
  const { model } = useForm();

  const getValue = () => {
    if (model) {
      return model[attr];
    }
    return value;
  }
  
  return (
    <InputField 
      type='email'
      attr={attr}
      value={value}
      label={label}
      errorLabel={errorLabel || 'Please enter a valid email address.'}
      onChange={onChange}
      required={required} 
      validationFn={() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(getValue()) }
    >
    </InputField>
  );
}

export default MailField;