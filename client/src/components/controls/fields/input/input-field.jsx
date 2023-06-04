import { useForm } from "../../../containers/form-context";
import BaseField from "./base-field";
import "./input-field.scss";


function InputField({
  type,
  attr,
  value,
  label,
  errorLabel,
  onChange,
  required,
  validationFn
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
      validationFn={validationFn}
    >
      <input id={`input-${attr}`} type={type} value={getValue()} onChange={onValueChange} autoComplete="off" noValidate />
    </BaseField>
  );
}

export default InputField;