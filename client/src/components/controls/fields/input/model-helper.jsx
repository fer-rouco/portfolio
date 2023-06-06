
export default function modelHelper({ modelState, attr, value, onChange }) {
  const { model, setModel } = modelState;

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

  return { onValueChange, getValue };
}
