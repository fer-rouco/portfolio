import "./nav-bar.scss";
import PropTypes from 'prop-types';
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from '../../contexts/theme-context';
import Panel from '../containers/panel';
import { ReactComponent as Moon } from '../../assets/icons/moon.svg';
import { ReactComponent as Sun } from '../../assets/icons/sun.svg';
import { ReactComponent as Download } from '../../assets/icons/download.svg';
import { ReactComponent as Spanish } from '../../assets/icons/flag-es.svg';
import { ReactComponent as Portuguese } from '../../assets/icons/flag-pt.svg';
import { ReactComponent as German } from '../../assets/icons/flag-ge.svg';
import { ReactComponent as English } from '../../assets/icons/flag-en.svg';
import { STORAGE_LANGUAGE } from "./../../services/storage/storage-constants";
import storageManagerService from "./../../services/storage/storage-manager-service";
import i18n from "i18next";

const localStorageService = storageManagerService();

// ############ Nav Item Components ############

function NavItem(content) {
  return (
    <li className='nav__item'>
      {content}
    </li>
  );
}

function Link({children, href, theme}) {
  return (
    <a className={`nav__link ${theme}`} href={href} name='nav-item' tabIndex="0">
      {children}
    </a>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

function Button({children, fn, theme}) {
  return (
    <button className={`nav__button ${theme}`} onClick={fn} name='nav-item' tabIndex="0">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  fn: PropTypes.func.isRequired,
  theme: PropTypes.string,
};

function NavItemLink({children, href, theme}) {
  return (
    NavItem( Link({children, href, theme}) )
  );
}

function NavItemButton({children, fn, theme}) {
  return (
    NavItem( Button({children, fn, theme}) )
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
      <NavItemButton key={language.value} fn={() => {handleLanguageChange(language.value)}} theme >
        {language.flag}
        {language.label}
      </NavItemButton>
    ))
  );
}

function ContextMenuLanguageButton({toggleState}) {
  const [show, setShow] = toggleState;
  const { t } = useTranslation('components', { keyPrefix: 'bars.navBar.context-menu' });
  const flagMap = buildFlagMap();
  const language = localStorageService.getItem(STORAGE_LANGUAGE);
  return (
    <NavItemButton fn={() => { setShow(!show); }}>{flagMap.get(language)}{t('language')}</NavItemButton>
 );
}

function ContextMenuLanguage() {
  const [show, setShow] = useState(false);
  return (
    <>
      <ContextMenuLanguageButton toggleState={[show, setShow]} ></ContextMenuLanguageButton>
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

function ContextMenuContent({theme}) {
  const { t } = useTranslation('components', { keyPrefix: 'bars.navBar.context-menu' });

  return (
    <div className={`context-menu ${theme}`} >
      { downloadResumeLink(t('resume'), theme) }
      <ContextMenuLanguage></ContextMenuLanguage>
    </div >
  );
}

ContextMenuContent.propTypes = {
  theme: PropTypes.string,
};

function ContextMenu({theme}) {
  return (
    <>
      <ContextMenuIcon></ContextMenuIcon>
      <ContextMenuContent theme={theme} ></ContextMenuContent>
    </>
  );
}

ContextMenu.propTypes = {
  theme: PropTypes.string,
};

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
      <ul className='nav__list' >
        <NavItemLink href='#welcome-section' theme={theme} >{t('about')}</NavItemLink>
        <NavItemLink href='#projects-section' theme={theme} >{t('work')}</NavItemLink>
        <NavItemLink href='#contact-section' theme={theme} >{t('contact')}</NavItemLink>
        <ThemeToggler></ThemeToggler>
        <ContextMenu theme={theme} ></ContextMenu>
      </ul>
    </nav>
  );
}

export default NavBar;
