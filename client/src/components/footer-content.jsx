import "./footer-content.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function ProfileLink({ id, href, children, ariaLabel }) {
  return (
    <a id={id} target='_blank' href={href} name="profile-link" aria-label={`${ariaLabel} || ${id} Link`} >
      {children}
    </a>
  );
}

function ProfileLinkIcon({ id, href, icon, ariaLabel }) {
  return (
    <ProfileLink>
      <FontAwesomeIcon icon={icon} beatFade={true} tabIndex="0" ></FontAwesomeIcon>
    </ProfileLink>
  );
}

function FooterContet() {
  return (
    <>
      <div className="social-links" >
        <ProfileLinkIcon id='LinkedIn' icon={faLinkedin} href="https://www.linkedin.com/in/fer-rouco"></ProfileLinkIcon>
        <ProfileLinkIcon id='GitHub'   icon={faGithub}   href="https://github.com/fer-rouco"></ProfileLinkIcon>
        <ProfileLinkIcon id='Mail'     icon={faEnvelope} href="mailto:rouco.fernando@gmail.com"></ProfileLinkIcon>
        <ProfileLink id='LinkedIn'                       href="https://www.codewars.com/users/fer.rouco">
          <img alt="Light Badge (micro)" className="codewars-badge" src="https://www.codewars.com/users/fer.rouco/badges/micro"></img>
        </ProfileLink>
      </div>
      <div className='copyrights' >
        <span>&#169; Fernando Nicolás Rouco</span>
      </div>
    </>
  );
}

export default FooterContet;
