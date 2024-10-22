import { useTranslation } from "react-i18next";
import { useTheme } from '../../contexts/theme-context';
import Panel from "../containers/panel";
import "./card.scss";

function Card({ title, srcImg, altImg, children }) {
  const { theme } = useTheme();
  const { t } = useTranslation('components', { keyPrefix: 'general.card' });

  return (
    <Panel className='card' >
      <figure>
        <figcaption className={`card__title ${theme}`} >{title}</figcaption>
        <div className='card__image-container'>
          <img className='card__image' src={srcImg} alt={altImg} />
        </div>
      </figure>
      {children}
    </Panel>
  );
}

export default Card;