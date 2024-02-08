import {useRef} from 'react';
import "./welcome-section.scss";
import { ReactComponent as Waves } from '../../assets/waves.svg';

function WelcomeSection() {
  const isDarkMode = true;

  const renderStars = () => {
    return (
      [...Array(1000)].map((x, i) => {
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * 800;
        const alfa = Math.random();
        const dimension = (Math.floor(Math.random() * 5) + 1) + 'px';
        return <div className="welcome-section__star" style={{ left: posX + 'px', top: posY + 'px', opacity: alfa, width: dimension, height: dimension }} ></div>
      })
    );
  }

  const renderTextContainer = () => {
    return (
      <div className='welcome-section__text-container'>
        <h1 className='welcome-section__text-hi' >Hi, my name is Fer</h1>
        <p className='welcome-section__text-web-dev' >a passionate web developer.</p>
      </div>
    );
  }

  const renderMainStarMoon = (darkMode) => {
    return (
      <div className={`welcome-section__main-star welcome-section__moon`}>
        <div class="crater"></div>
        <div class="crater"></div>
        <div class="crater"></div>
        <div class="crater"></div>
      </div>
    );
  }

  const renderMainStarSun = (darkMode) => {
    return (
      <div className={`welcome-section__main-star welcome-section__sun`}></div>
    );
  }

  const renderMainStar = (darkMode) => {
    const mainStarStyle = darkMode ? "moon" : "sun";
    return (
      (darkMode) ? renderMainStarMoon() : renderMainStarSun()
    );
  }

  const renderDarkMode = () => {
    return (
      <>
        { renderStars() }
        { renderMainStar(isDarkMode) }
      </>
    );
  }

  const renderLightMode = () => {
    return (
      <>
        { renderMainStar(isDarkMode) }
      </>
    );
  }

  return (
    <section id='welcome-section' className={`welcome-section welcome-section-${isDarkMode ? "dark" : "light"}`} >
      { renderTextContainer() }
      { (isDarkMode) ? renderDarkMode() : renderLightMode() }
      <Waves></Waves>
    </section>
  );
}

export default WelcomeSection;
