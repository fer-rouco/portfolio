import classnames from 'classnames';
import { useTranslation } from "react-i18next";
import { ReactComponent as Waves } from '../../assets/waves.svg';
import { useTheme } from '../../contexts/theme-context';
import WelcomeSectionBackgroundDark from './welcome-section-background-dark';
import WelcomeSectionBackgroundLight from './welcome-section-background-light';
import "./welcome-section.scss";

function WelcomeSectionTextContainer() {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation('components', { keyPrefix: 'sections.welcome' });
  const darkModeClass = isDarkMode() ? 'dark' : 'light';

  return (
    <div className='welcome-section__text-container'>
      <h1 className={classnames('welcome-section__text-hi', darkModeClass)} >{t('hi-first-line')}</h1>
      <p className={classnames('welcome-section__text-web-dev', darkModeClass)} >{t('hi-second-line')}</p>
    </div>
  );
}

function WelcomeSection() {
  const { theme, isDarkMode } = useTheme();

  return (
    <section id='welcome-section' className={`welcome-section welcome-section-${theme}`} >
      <WelcomeSectionTextContainer></WelcomeSectionTextContainer>
      { 
        isDarkMode()
          ? <WelcomeSectionBackgroundDark></WelcomeSectionBackgroundDark>
          : <WelcomeSectionBackgroundLight></WelcomeSectionBackgroundLight> 
      }
      { <Waves></Waves> }
    </section>
  );
}

export default WelcomeSection;
