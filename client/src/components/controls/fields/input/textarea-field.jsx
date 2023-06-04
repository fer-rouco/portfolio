import { useForm } from "../../../containers/form-context";
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
  const { model, setModel } = useForm();

  const onValueChange = (event) => {
    if (model) {
      const modelWithChange = {...model};
      modelWithChange[attr] = event.target.value;
      setModel(modelWithChange);
    } else {
      onChange();
    }

  }

  const getValue = () => {
    if (model) {
      return model[attr];
    }
    return value;
  }

  return (
    <BaseField
      attr={attr}
      label={label}
      value={getValue()}
      errorLabel={errorLabel}
      required={required}
      containerClass='textarea-container'
    >
      <textarea id={`input-${attr}`} value={getValue()} onChange={onValueChange} cols={cols} rows={rows} autoComplete="off" noValidate />
    </BaseField>
  );
}

export default TextAreaField;