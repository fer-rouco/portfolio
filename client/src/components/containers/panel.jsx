import { useTheme } from '../../contexts/theme-context';
import "./panel.scss";

function Panel({children, className}) {
  const { theme } = useTheme();

  return (
    <div className={`panel ${theme} ${className}`} >
      {children}
    </div>
  );
}

export default Panel;
