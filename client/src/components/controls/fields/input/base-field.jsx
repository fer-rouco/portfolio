import "./base-field.scss";


function BaseField({ children, attr, label, errorLabel, containerClass }) {
  return (
    <div className={`input-container ${containerClass}`} >
      <div className='label-container' >
        <label htmlFor={`input-${attr}`} >{label} :</label>
        <span className='label-container__error-label hide' >{errorLabel || `Please enter your ${label.toLowerCase()}.`}</span>
      </div>
      {children}
    </div>
  );
}

export default BaseField;