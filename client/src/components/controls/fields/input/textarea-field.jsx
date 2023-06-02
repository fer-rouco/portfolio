import BaseField from "./base-field";
import "./textarea-field.scss";


function TextAreaField({ attr, value, label, errorLabel, onChange, cols, rows }) {
  return (
    <BaseField attr={attr} label={label} errorLabel={errorLabel} containerClass='textarea-container' >
      <textarea id={`input-${attr}`} value={value} onChange={onChange} cols={cols} rows={rows} required/>
    </BaseField>
  );
}

export default TextAreaField;