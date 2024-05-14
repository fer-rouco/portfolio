import { useModel } from "../../../../contexts/model-context";
import InputField from "./input-field";
import modelHelper from "./model-helper";
import { useTranslation } from "react-i18next";

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
  const tValidations = useTranslation('components', { keyPrefix: 'controls.fields.validations' }).t;
  
  return (
    <InputField 
      type='email'
      attr={attr}
      value={value}
      label={label}
      errorLabel={errorLabel || tValidations('valid-email')}
      onChange={onChange}
      required={required}
      validate={validate}
      validationFn={() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(getValue()) }
    >
    </InputField>
  );
}

export default MailField;