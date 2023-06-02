import "./welcome-section.scss";
import { ReactComponent as Waves } from '../../assets/waves.svg';

function WelcomeSection() {
  return (
    <section id='welcome-section' className='welcome-section' >
      <div className='welcome-section__text-container'>
        <h1 className='welcome-section__text-hi' >Hi, my name is Fer</h1>
        <p className='welcome-section__text-web-dev' >a passionate web developer.</p>
      </div>
      <div className="welcome-section__sun"></div>
      <Waves></Waves>
    </section>
  );
}

export default WelcomeSection;
