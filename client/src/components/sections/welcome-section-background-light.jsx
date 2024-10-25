import { useEffect, useState } from 'react';
import "./welcome-section.scss";


function WelcomeSectionBackgroundLight() {
  const [cloudsCount, setCloudsCount] = useState(0);

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

  const addToCloudsCount = () => {
    setCloudsCount(prevCount => prevCount + 1);
  };
  
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

  const renderSun = () => {
    return (
      <div className={`welcome-section__main-star welcome-section__sun`}>
        <div className='ray-of-sunshine x1'></div>
        <div className='ray-of-sunshine x2'></div>
        <div className='ray-of-sunshine x3'></div>
        <div className='ray-of-sunshine x4'></div>
      </div>
    );
  }

  return (
    <>
      { renderClouds() }
      { renderSun() }
    </>
  );
}

export default WelcomeSectionBackgroundLight;
