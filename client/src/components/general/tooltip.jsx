import "./tooltip.scss";

export default function Tooltip({ body, children }) {
  return (
    <div className="tooltip-container">
      <div className="tooltip-container__body">
        {body}
      </div>
      <div className="tooltip-container__children">
        {children}
      </div>
    </div>
  );
}


