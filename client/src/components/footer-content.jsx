import "./footer-content.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function ProfileLink({ id, href, icon, ariaLabel }) {
  return (
    <a id={id} target='_blank' href={href} name="profile-link" aria-label={`${ariaLabel} || ${id} Link`} >
      <FontAwesomeIcon icon={icon} beatFade={true} tabIndex="0" ></FontAwesomeIcon>
    </a>
  );
}

function FooterContet() {
  return (
    <>
      <div className="social-links" >
        <ProfileLink id='LinkedIn' icon={faLinkedin} href="https://www.linkedin.com/in/fer-rouco"></ProfileLink>
        <ProfileLink id='GitHub'   icon={faGithub}   href="https://github.com/fer-rouco"></ProfileLink>
        <ProfileLink id='Mail'     icon={faEnvelope} href="mailto:rouco.fernando@gmail.com"></ProfileLink>
      </div>
      <div className='copyrights' >
        <span>&#169; Fernando Nicolás Rouco</span>
      </div>
    </>
  );
}

export default FooterContet;
