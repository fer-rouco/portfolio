import classnames from 'classnames';
import { useEffect, useState } from 'react';
import { getRandomInt } from '../../utils/math-util';
import "./welcome-section.scss";

function WelcomeSectionBackgroundDark() {
  const [staticStars, setStaticStars] = useState(null);
  const [shootingStarAnimacion, setShootingStarAnimacion] = useState('');
  const [shootingStarAnimacionRandomTime, setShootingStarAnimacionRandomTime] = useState(5000);

  useEffect(() => {
    setStaticStars(renderStaticStars());
  }, []);

  useEffect(() => {
    const ANIMATION_DURATION = 2600; // Shuld be consistent with the animation css class
    const intervalo = setInterval(() => {
      setShootingStarAnimacionRandomTime(getRandomInt(6000, 10000)); // Between 6 and 10 seconds
      const shootingStarAnimacionDirection = (getRandomInt(0, 1) === 0) ? 'L' : 'R';
      setShootingStarAnimacion(shootingStarAnimacionDirection);
      setTimeout(() => {
        setShootingStarAnimacion('');
      }, ANIMATION_DURATION);
    }, shootingStarAnimacionRandomTime); // Random interval

    return () => clearInterval(intervalo);
  }, [shootingStarAnimacionRandomTime]);
  
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

  const renderStaticShiningStar = () => {
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

    return renderStaticStar(0, 'shining', shiningAnimationStyle);
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

  const renderMoon = () => {
    return (
      <div className={`welcome-section__main-star welcome-section__moon`}>
        <div className="crater"></div>
        <div className="crater"></div>
        <div className="crater"></div>
        <div className="crater"></div>
      </div>
    );
  }

  return (
    <>
      { staticStars }
      { renderShotingStars() }
      { renderMoon() }
      { renderStaticShiningStar() }
    </>
  );
}

export default WelcomeSectionBackgroundDark;
