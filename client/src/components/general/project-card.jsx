import { useTranslation } from "react-i18next";
import { useTheme } from '../../contexts/theme-context';
import Button from "../controls/buttons/button";
import Card from "./card";
import "./project-card.scss";
import Tag from "./tag";
import Tooltip from "./tooltip";

function ProjectCard({ title, description, srcImg, altImg, codeHref, liveHref, tags, liveTooltip }) {
  const { theme } = useTheme();
  const { t } = useTranslation('components', { keyPrefix: 'general.card' });

  return (
    <Card title={title} description={description} srcImg={srcImg} altImg={altImg} >
      <div className="project-card">
        <div className='project-card__tag-container' >
          {tags.map((tag) => (
            <Tag key={tag.text} tech={tag}></Tag>
          ))}
        </div>
        <p className={`project-card__description ${theme}`} >{description}</p>
        <div className='project-card__buttons' >
          <a href={codeHref} className='project-card__button-code' target='_blank' rel='noreferrer' >
            <Button>&lt;/&gt;</Button>
          </a>
          <a href={liveHref} className='project-card__button-live' target='_blank' rel='noreferrer' >
            <Tooltip body={liveTooltip}>
              <Button disabled={!liveHref}>{t('live-view')}</Button>
            </Tooltip>
          </a>
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;