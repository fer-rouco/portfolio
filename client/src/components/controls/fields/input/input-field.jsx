import BaseField from "./base-field";
import "./input-field.scss";


function InputField({ type, attr, value, label, errorLabel, onChange }) {
  return (
    <BaseField attr={attr} label={label} errorLabel={errorLabel} >
      <input id={`input-${attr}`} type={type} value={value} onChange={onChange}/>
    </BaseField>
  );
}

export default InputField;