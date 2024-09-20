import i18n from "i18next";
import PropTypes from 'prop-types';
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as Download } from '../../assets/icons/download.svg';
import { ReactComponent as English } from '../../assets/icons/flag-en.svg';
import { ReactComponent as Spanish } from '../../assets/icons/flag-es.svg';
import { ReactComponent as German } from '../../assets/icons/flag-ge.svg';
import { ReactComponent as Portuguese } from '../../assets/icons/flag-pt.svg';
import { ReactComponent as Moon } from '../../assets/icons/moon.svg';
import { ReactComponent as Sun } from '../../assets/icons/sun.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { useTheme } from '../../contexts/theme-context';
import Panel from '../containers/panel';
import { STORAGE_LANGUAGE } from "./../../services/storage/storage-constants";
import storageManagerService from "./../../services/storage/storage-manager-service";
import "./nav-bar.scss";

const localStorageService = storageManagerService();

// ############ Nav Item Components ############

function NavItem(content) {
  return (
    <li className='nav__item'>
      {content}
    </li>
  );
}

function Link({children, href, className}) {
  const { theme } = useTheme();

  return (
    <a className={`nav__link ${theme} ${className}`} href={href} name='nav-item' tabIndex="0">
      {children}
    </a>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string
};

function Button({children, fn, className}) {
  const { theme } = useTheme();

  return (
    <button className={`nav__button ${theme} ${className}`} onClick={fn} name='nav-item' tabIndex="0">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  fn: PropTypes.func.isRequired,
  className: PropTypes.string
};

function NavItemLink({children, href, className}) {
  return (
    NavItem( Link({children, href, className}) )
  );
}

function NavItemButton({children, fn, className}) {
  return (
    NavItem( Button({children, fn, className}) )
  );
}

// ############ Context Menu Components ############

function downloadResumeLink(text, theme) {
  return (
    <NavItemLink href="https://drive.google.com/uc?export=download&id=1dDRQYhjM_Wl6MTbFcuh0B39V0Ix3c4mS" theme={theme} >
      <Download className="download-icon" ></Download>
      {text}
    </NavItemLink>
  );
}

function buildFlagMap() {
  return new Map([
    ['en', <English key='en' ></English>],
    ['es', <Spanish key='es' ></Spanish>],
    ['ge', <German key='ge' ></German>],
    ['pt', <Portuguese key='pt' ></Portuguese>],
  ]);
}

function ContextMenuLanguageContent() {
  const { theme } = useTheme();
  const flagMap = buildFlagMap();
  const tLanguage = useTranslation('languages').t;
  const translationLanguages = Object.keys(i18n.services.resourceStore.data);
  const languages = translationLanguages.map((language) => {
    return {
      value: language,
      label: tLanguage(language),
      flag: flagMap.get(language)
    };
  });

  return (
    languages.map(language => (
      <NavItemButton key={language.value} fn={() => {handleLanguageChange(language.value)}} theme={theme} >
        {language.flag}
        {language.label}
      </NavItemButton>
    ))
  );
}

function ContextMenuLanguageButton({ toggleState }) {
  const { theme } = useTheme();
  const [show, setShow] = toggleState;
  const { t } = useTranslation('components', { keyPrefix: 'bars.navBar.context-menu' });
  const flagMap = buildFlagMap();
  const language = localStorageService.getItem(STORAGE_LANGUAGE);
  return (
    <NavItemButton fn={() => { setShow(!show); }} className={`language arrow-${show ? 'up' : 'down'}`} theme={theme} ><div className="center">{flagMap.get(language)}{t('language')}</div></NavItemButton>
 );
}

function ContextMenuLanguage({ toggleState }) {
  const [show] = toggleState;
  return (
    <>
      <ContextMenuLanguageButton toggleState={toggleState} ></ContextMenuLanguageButton>
        { show ? 
          <Panel transparent>
            <ContextMenuLanguageContent></ContextMenuLanguageContent>
          </Panel>
            : 
          <></> 
        }
    </>
 );
}

function ContextMenuIcon() {
  return (
    <button className="menu-icon">
      <span className="menu-icon-item" ></span>
      <span className="menu-icon-item" ></span>
      <span className="menu-icon-item" ></span>
    </button>
  );
}

function ContextMenuContent() {
  const { theme } = useTheme();
  const { t } = useTranslation('components', { keyPrefix: 'bars.navBar.context-menu' });
  const [show, setShow] = useState(false);

  return (
    <div className={`context-menu ${theme}`} onMouseLeave={() => { setShow(false); }} >
      { downloadResumeLink(t('resume'), theme) }
      <ContextMenuLanguage toggleState={[show, setShow]}></ContextMenuLanguage>
    </div >
  );
}

function ContextMenu() {
  const { theme } = useTheme();

  return (
    <div className="context-menu-container">
      <ContextMenuIcon></ContextMenuIcon>
      <ContextMenuContent theme={theme} ></ContextMenuContent>
    </div>
  );
}

function handleLanguageChange(language) {
  i18n.changeLanguage(language, (error, t) => {
    if (!error) {
      localStorageService.setItem(STORAGE_LANGUAGE, language);
    }
    else {
      return console.error('Something went wrong trying to change the language.', error);
    }
  });
}

// ############ Theme Toggler Component ############

function ThemeToggler() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <li className="theme-icon" ><button className="theme-icon__button" onClick={toggleTheme} >{ (isDarkMode()) ? <Sun></Sun> : <Moon></Moon> }</button></li>
  );
}

// ############ Main Component ############

function NavBar() {
  const { theme } = useTheme();
  const { t } = useTranslation('components', { keyPrefix: 'bars.navBar' });

  return (
    <nav className={`nav ${theme}`} >
      <div className={`nav__logo ${theme}`} >
        <Logo></Logo>
      </div>
      <ul className='nav__list' >
        <NavItemLink href='#welcome-section' className='header' >{t('about')}</NavItemLink>
        <NavItemLink href='#projects-section' className='header' >{t('work')}</NavItemLink>
        <NavItemLink href='#contact-section' className='header' >{t('contact')}</NavItemLink>
        <ThemeToggler></ThemeToggler>
        <ContextMenu ></ContextMenu>
      </ul>
    </nav>
  );
}

export default NavBar;
