import classnames from 'classnames';
import { useEffect, useState } from 'react';
import { getRandomInt } from '../../utils/math-util';
import "./welcome-section.scss";
  
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

function useAnimation(animationStart = 6000, animationEnd = 10000) {
  const [animation, setAnimation] = useState('');
  const [animationRandomTime, setAnimationRandomTime] = useState(2000);

  useEffect(() => {
    const ANIMATION_DURATION = 2600; // ANIMATION_DURATION Shuld be consistent with the animation css class
    const intervalo = setInterval(() => {
      setAnimationRandomTime(getRandomInt(animationStart, animationEnd)); // Between 6 and 10 seconds
      const shootingStarAnimacionDirection = (getRandomInt(0, 1) === 0) ? 'L' : 'R';
      setAnimation(shootingStarAnimacionDirection);
      setTimeout(() => {
        setAnimation('');
      }, ANIMATION_DURATION);
    }, animationRandomTime); // Random interval

    return () => clearInterval(intervalo);
  }, [animationRandomTime]);

  return [animation];
}

function RenderShootingStars() {
  const [animation] = useAnimation();

  if (!animation) {
    return;
  }

  const shootingStarAnimacionToRight = animation === 'R';
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

function RenderStaticStars() {
  let starsQuantity = ((window.innerHeight * window.innerWidth) / 1000) | 1000;
  starsQuantity = (starsQuantity > 1000) ? 1000 : starsQuantity;
  
  return (
    [...Array(starsQuantity)].map((x, index) => {
      return renderStaticStar(index);
    })
  );
}

function RenderStaticShiningStar() {
  const [animation] = useAnimation(2000, 5000);

  if (!animation) {
    return;
  }
  
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

function RenderMoon() {
  return (
    <div className={`welcome-section__main-star welcome-section__moon`}>
      <div className="crater"></div>
      <div className="crater"></div>
      <div className="crater"></div>
      <div className="crater"></div>
    </div>
  );
}

function WelcomeSectionBackgroundDark() {
  return (
    <>
      <RenderMoon></RenderMoon>
      <RenderStaticStars></RenderStaticStars>
      <RenderStaticShiningStar></RenderStaticShiningStar>
      <RenderShootingStars></RenderShootingStars>
    </>
  );
}

export default WelcomeSectionBackgroundDark;
