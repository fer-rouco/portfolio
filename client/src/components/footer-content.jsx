import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from '../contexts/theme-context';
import "./footer-content.scss";

function ProfileLink({ id, href, children, ariaLabel }) {
  return (
    <a id={id} target='_blank' rel='noreferrer' href={href} name="profile-link" className="profile-link" aria-label={`${ariaLabel} || ${id} Link`} >
      {children}
    </a>
  );
}

function ProfileLinkIcon({ id, href, icon, ariaLabel }) {
  return (
    <ProfileLink id={id} href={href} ariaLabel={ariaLabel} >
      <FontAwesomeIcon icon={icon} beatFade={true} className="profile-link__icon" tabIndex="0" ></FontAwesomeIcon>
    </ProfileLink>
  );
}

function FooterContet() {
  const { theme } = useTheme();
  return (
    <div className={`footer ${theme}`}>
      <div className="social-links" >
        <ProfileLinkIcon id='LinkedIn' icon={faLinkedin} href="https://www.linkedin.com/in/fer-rouco"></ProfileLinkIcon>
        <ProfileLinkIcon id='GitHub'   icon={faGithub}   href="https://github.com/fer-rouco"></ProfileLinkIcon>
        <ProfileLinkIcon id='WhatsApp' icon={faWhatsapp} href="https://wa.me/5491161132585"></ProfileLinkIcon>
        <ProfileLinkIcon id='Mail'     icon={faEnvelope} href="mailto:rouco.fernando@gmail.com"></ProfileLinkIcon>
        <ProfileLink     id='CodeWars'                   href="https://www.codewars.com/users/fer.rouco">
          <img alt="Light Badge (micro)" className="codewars-badge" src="https://www.codewars.com/users/fer.rouco/badges/micro"></img>
        </ProfileLink>
        <ProfileLink     id='FreeCodeCamp'               href="https://www.freecodecamp.org/fer-rouco">
          <img alt="Free Code Camp" className="free-code-camp-image" ></img>
        </ProfileLink>
      </div>
      <div className={`copyrights ${theme}`} >
        <span>&#169; Fernando Nicolás Rouco</span>
      </div>
    </div>
  );
}

export default FooterContet;
