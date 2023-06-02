import "./footer-content.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function ProfileLink({ id, href, icon }) {
  return (
    <a id={id} target='_blank' href={href} >
      <FontAwesomeIcon icon={icon} beatFade={true} ></FontAwesomeIcon>
    </a>
  );
}

function FooterContet() {
  return (
    <>
      <div className="social-links" >
        <ProfileLink icon={faLinkedin} href="https://www.linkedin.com/in/fernando-nicolás-rouco-a1066262/"></ProfileLink>
        <ProfileLink icon={faGithub}   href="https://github.com/fernet87"></ProfileLink>
        <ProfileLink icon={faEnvelope} href="mailto:rouco.fernando@gmail.com"></ProfileLink>
      </div>
      <div className='copyrights' >
        <span>&#169; Fernando Nicolás Rouco</span>
      </div>
    </>
  );
}

export default FooterContet;
