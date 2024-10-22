import "./button.scss";

export default function Button({ type, disabled, labelPrefix, children, labelSufix, onClick, onKeyDown, tooltip }) {
  return (
    <button className='button' type={type || 'button'} disabled={disabled} onClick={onClick} onKeyDown={onKeyDown} tabIndex="0" >
      {labelPrefix}
      {children}
      {labelSufix}
    </button>
  );
}
