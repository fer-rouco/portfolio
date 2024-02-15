import "./nav-bar.scss";
import { useTheme } from '../../contexts/theme-context';
import { ReactComponent as Moon } from '../../assets/icons/moon.svg';
import { ReactComponent as Sun } from '../../assets/icons/sun.svg';

function NavItem({text, href, theme}) {
  return (
    <li className='nav__item'>
      <a className={`nav__link ${theme}`} href={href} name='nav-item' tabIndex="0">
        {text}
      </a>
    </li>
  );
}

function NavBar() {
  const { theme, isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className={`nav ${theme}`} >
      <ul className='nav__list' >
        <NavItem text='About' href='#welcome-section' theme={theme} ></NavItem>
        <NavItem text='Work' href='#projects-section' theme={theme} ></NavItem>
        <NavItem text='Contact' href='#contact-section' theme={theme} ></NavItem>
        <li className="theme-icon" onClick={toggleTheme} >{ (isDarkMode()) ? <Sun></Sun> : <Moon></Moon> } </li>
      </ul>
    </nav>
  );
}

export default NavBar;
