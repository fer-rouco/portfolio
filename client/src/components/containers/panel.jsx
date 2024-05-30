import { useTheme } from '../../contexts/theme-context';
import PropTypes from 'prop-types';
import "./panel.scss";

function Panel({children, className, transparent}) {
  const { theme } = useTheme();

  return (
    <div className={`panel ${transparent ? '' : theme} ${className}`} >
      {children}
    </div>
  );
}

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  transparent: PropTypes.bool
};

export default Panel;
