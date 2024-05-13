import "./nav-bar.scss";
import { useTheme } from '../../contexts/theme-context';
import { ReactComponent as Moon } from '../../assets/icons/moon.svg';
import { ReactComponent as Sun } from '../../assets/icons/sun.svg';
import { useTranslation } from "react-i18next";
import i18n from "i18next";


function NavItem(content) {
  return (
    <li className='nav__item'>
      {content}
    </li>
  );
}

function Link({text, href, theme}) {
  return (
    <a className={`nav__link ${theme}`} href={href} name='nav-item' tabIndex="0">
      {text}
    </a>
  );
}

function Button({text, fn, theme}) {
  return (
    <button className={`nav__button ${theme}`} onClick={fn} name='nav-item' tabIndex="0">
      {text}
    </button>
  );
}

function NavItemLink({text, href, theme}) {
  return (
    NavItem( Link({text, href, theme}) )
  );
}

function NavItemButton({text, fn, theme}) {
  return (
    NavItem( Button({text, fn, theme}) )
  );
}

function handleLanguageChange(language) {
  i18n.changeLanguage(language, (error, t) => {
    if (!error) {
      console.error("Error trying to change language");
    }
    else {
      return console.error('Something went wrong trying to change the language.', error);
    }
  });
}


function NavBar() {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const { t } = useTranslation('components', { keyPrefix: 'bars.navBar' });
  const tLanguage = useTranslation('languages').t;
  const languages = Object.keys(i18n.services.resourceStore.data).map((language) => { return { value: language, label: tLanguage(language) }; });

  return (
    <nav className={`nav ${theme}`} >
      <ul className='nav__list' >
        <NavItemLink text={t('about')} href='#welcome-section' theme={theme} ></NavItemLink>
        <NavItemLink text={t('work')} href='#projects-section' theme={theme} ></NavItemLink>
        <NavItemLink text={t('contact')} href='#contact-section' theme={theme} ></NavItemLink>
        <li className="theme-icon" onClick={toggleTheme} >{ (isDarkMode()) ? <Sun></Sun> : <Moon></Moon> } </li>
        <div className="menu-icon">
          <span className="menu-icon-item" ></span>
          <span className="menu-icon-item" ></span>
          <span className="menu-icon-item" ></span>
        </div>
        <div className={`context-menu ${theme}`} >
          {
            languages.map(language => (
              <NavItemButton key={language.value} text={language.label} fn={() => {handleLanguageChange(language.value)}} theme={theme} ></NavItemButton>
            ))
          }
        </div >

      </ul>
    </nav>
  );
}

export default NavBar;
