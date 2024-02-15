import "./welcome-section.scss";
import { ReactComponent as Waves } from '../../assets/waves.svg';

function WelcomeSection() {
  const isDarkMode = true;

  const renderStaticStars = () => {
    const starsQuantity = ((window.innerHeight * window.innerWidth) / 1000) | 1000;
    return (
      [...Array(starsQuantity)].map((x, index) => {
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * 800;
        const alfa = Math.random();
        const dimension = (Math.floor(Math.random() * 5) + 1) + 'px';
        const style = {
          left: posX + 'px',
          top: posY + 'px',
          opacity: alfa,
          width: dimension,
          height: dimension
        };
        return <div key={`${index}`} className="welcome-section__star" style={style} ></div>
      })
    );
  }

  const renderShotingStars = () => {
    return (
      <>
        <div className="welcome-section__star shoting shoting-to-right" ></div>
        <div className="welcome-section__star shoting shoting-to-left" ></div>
      </>
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
        <div className="crater"></div>
        <div className="crater"></div>
        <div className="crater"></div>
        <div className="crater"></div>
      </div>
    );
  }

  const renderMainStarSun = (darkMode) => {
    return (
      <div className={`welcome-section__main-star welcome-section__sun`}></div>
    );
  }

  const renderMainStar = (darkMode) => {
    return (
      (darkMode) ? renderMainStarMoon() : renderMainStarSun()
    );
  }

  const renderDarkMode = () => {
    return (
      <>
        { renderStaticStars() }
        { renderShotingStars() }
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
      { <Waves></Waves> }
    </section>
  );
}

export default WelcomeSection;
