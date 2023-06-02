import "./button.scss";

export default function Button({ type, disabled, labelPrefix, children, labelSufix, onClick, onKeyDown }) {
  return (
    <button className='button' type={type || 'button'} disabled={disabled} onClick={onClick} onKeyDown={onKeyDown} >
      {labelPrefix}
      {children}
      {labelSufix}
    </button>
  );
}
