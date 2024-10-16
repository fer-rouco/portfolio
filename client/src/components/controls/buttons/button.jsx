import "./button.scss";

export default function Button({ type, disabled, labelPrefix, children, labelSufix, onClick, onKeyDown, tooltip }) {
  return (
    <div className="button-container">
      <button className='button' type={type || 'button'} disabled={disabled} onClick={onClick} onKeyDown={onKeyDown} tabIndex="0" data-tooltip={tooltip} >
        {labelPrefix}
        {children}
        {labelSufix}
      </button>
    </div>
  );
}
