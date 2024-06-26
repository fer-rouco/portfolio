import { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/theme-context';
import { useTranslation } from "react-i18next";
import { ReactComponent as Waves } from '../../assets/waves.svg';
import classnames from 'classnames';
import "./welcome-section.scss";

function getRandomInt(min, max) { 
  min = Math.ceil(min); 
  max = Math.floor(max); 
  return Math.floor(Math.random() * (max - min + 1)) + min; 
} 

function WelcomeSection() {
  const { theme, isDarkMode } = useTheme();
  const { t } = useTranslation('components', { keyPrefix: 'sections.welcome' });

  // Light Mode States
  const [cloudsCount, setCloudsCount] = useState(0);

  // Dark Mode States
  const [staticStars, setStaticStars] = useState(null);
  const [shootingStarAnimacion, setShootingStarAnimacion] = useState('');
  const [shootingStarAnimacionRandomTime, setShootingStarAnimacionRandomTime] = useState(5000);

  useEffect(() => {
    setCloudsCount(0);
  }, [theme]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (cloudsCount < 8) {
        addToCloudsCount();
      } else {
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [cloudsCount]);

  useEffect(() => {
    setStaticStars(renderStaticStars());
  }, []);

  useEffect(() => {
    const ANIMATION_DURATION = 2600; // Shuld be consistent with the animation css class
    const intervalo = setInterval(() => {
      setShootingStarAnimacionRandomTime(getRandomInt(2000, 10000)); // Between 2 and 10 seconds
      const shootingStarAnimacionDirection = (getRandomInt(0, 1) === 0) ? 'L' : 'R';
      setShootingStarAnimacion(shootingStarAnimacionDirection);
      setTimeout(() => {
        setShootingStarAnimacion('');
      }, ANIMATION_DURATION);
    }, shootingStarAnimacionRandomTime); // Random interval

    return () => clearInterval(intervalo);
  }, [shootingStarAnimacionRandomTime]);

  const addToCloudsCount = () => {
    setCloudsCount(prevCount => prevCount + 1);
  };
  
  const renderStaticStar = (key, className, styleParam) => {
    const posX = getRandomInt(0, window.innerWidth);
    const posY = getRandomInt(0, window.innerHeight);
    const alfa = Math.random();
    const dimension = getRandomInt(1, 5) + 'px';
    const style = {
      left: posX + 'px',
      top: posY + 'px',
      opacity: alfa,
      width: dimension,
      height: dimension
    };
    return <div key={`${key}`} className={`welcome-section__stars ${className}`} style={styleParam ? styleParam : style} ></div>
  }

  const renderStaticStars = () => {
    let starsQuantity = ((window.innerHeight * window.innerWidth) / 1000) | 1000;
    starsQuantity = (starsQuantity > 1000) ? 1000 : starsQuantity;
    return (
      [...Array(starsQuantity)].map((x, index) => {
        return renderStaticStar(index);
      })
    );
  }

  const renderShotingStars = () => {
    if (!shootingStarAnimacion) {
      return;
    }

    const shootingStarAnimacionToRight = shootingStarAnimacion === 'R';
    const posX = getRandomInt(0, window.innerWidth);
    const posY = getRandomInt(0, 500);
    let classNameSettings = null, style = null;

    if (shootingStarAnimacionToRight) {
      classNameSettings = { 'shoting-to-right': true };

      style = { left: posX + 'px', top: posY + 'px' };
    }
    else {
      classNameSettings = { 'shoting-to-left': true };

      style = { right: posX + 'px', top: posY + 'px' };
    }


    return (
      <>
        <div className={classnames('welcome-section__stars shoting', classNameSettings)} style={style} ></div>
      </>
    );
  }

  const renderClouds = () => {
    const clouds = Array.from({ length: cloudsCount }).map((_, cloudsCountIndex) => {
      let xIndex = (cloudsCountIndex + 1 > 5) ? (cloudsCountIndex + 1) - 5 : cloudsCountIndex + 1;
      return (<div key={`cloud_${cloudsCountIndex}`} className={`cloud x${xIndex}`}></div>)
    });

    return (
      <>
        <div className="welcome-section__clouds">
          { clouds }
        </div>
      </>
    );
  }

  const renderTextContainer = () => {
    const darkModeClass = isDarkMode() ? 'dark' : 'light';
    return (
      <div className='welcome-section__text-container'>
        <h1 className={classnames('welcome-section__text-hi', darkModeClass)} >{t('hi-first-line')}</h1>
        <p className={classnames('welcome-section__text-web-dev', darkModeClass)} >{t('hi-second-line')}</p>
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
      <div className={`welcome-section__main-star welcome-section__sun`}>
        <div className='ray-of-sunshine x1'></div>
        <div className='ray-of-sunshine x2'></div>
        <div className='ray-of-sunshine x3'></div>
        <div className='ray-of-sunshine x4'></div>
      </div>
    );
  }

  const renderMainStar = (darkMode) => {
    return (
      (darkMode) ? renderMainStarMoon() : renderMainStarSun()
    );
  }

  const renderDarkMode = () => {
    const posX = getRandomInt(0, window.innerWidth);
    const posY = getRandomInt(0, 500);
    const alfa = Math.random();
    const dimensionInt = getRandomInt(3, 6);
    const shiningAnimationStyle = {
      left: posX + 'px',
      top: posY + 'px',
      opacity: alfa,
      width: dimensionInt * 2 + 'px',
      height: dimensionInt * 2 + 'px'
    };

    return (
      <>
        { staticStars }
        { renderShotingStars() }
        { renderMainStar(true) }
        { renderStaticStar(0, 'shining', shiningAnimationStyle) }
      </>
    );
  }

  const renderLightMode = () => {
    return (
      <>
        { renderClouds() }
        { renderMainStar(false) }
      </>
    );
  }

  return (
    <section id='welcome-section' className={`welcome-section welcome-section-${theme}`} >
      { renderTextContainer() }
      { (isDarkMode()) ? renderDarkMode() : renderLightMode() }
      { <Waves></Waves> }
    </section>
  );
}

export default WelcomeSection;
