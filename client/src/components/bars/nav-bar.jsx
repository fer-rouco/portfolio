import "./nav-bar.scss";

function NavItem({text, href}) {
  return (
    <li className='nav__item'>
      <a className='nav__link' href={href} >{text}</a>
    </li>
  );
}

function NavBar() {
  return (
    <nav className='nav' >
      <ul className='nav__list' >
        <NavItem text='About' href='#welcome-section' ></NavItem>
        <NavItem text='Work' href='#projects-section' ></NavItem>
        <NavItem text='Contact' href='#contact-section' ></NavItem>
      </ul>
    </nav>
  );
}

export default NavBar;
