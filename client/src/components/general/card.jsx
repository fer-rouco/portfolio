import Panel from "../containers/panel";
import Button from "../controls/buttons/button";
import { useTheme } from '../../contexts/theme-context';
import { useTranslation } from "react-i18next";
import Tag from "./tag";
import "./card.scss";

function Card({ title, description, srcImg, altImg, hrefCode, hrefLive, tags }) {
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
      <div className='card__tag-container' >
        {tags.map((tag) => (
          <Tag key={tag.text} tech={tag}></Tag>
        ))}
      </div>
      <p className={`card__description ${theme}`} >{description}</p>
      <div className='card__buttons' >
        <a href={hrefCode} className='card__button-code' target='_blank' rel='noreferrer' >
          <Button>&lt;/&gt;</Button>
        </a>
        <a href={hrefLive} className='card__button-live' target='_blank' rel='noreferrer' >
          <Button>{t('live-view')}</Button>
        </a>
      </div>
    </Panel>
  );
}

export default Card;