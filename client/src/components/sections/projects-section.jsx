import { useTranslation } from "react-i18next";
import Card from "../general/card";
import { TECH } from "../general/tag";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTheme } from '../../contexts/theme-context';
import "./projects-section.scss";

const PROJECTS = [
  {
    key: 'portfolio',
    srcImg: 'https://raw.githubusercontent.com/fer-rouco/portfolio/main/assets/Portfolio.png',
    hrefCode: 'https://github.com/fer-rouco/portfolio/',
    hrefLive: 'https://fer-rouco.github.io/portfolio/',
    tags: [TECH.HTML, TECH.CSS3, TECH.JavaScript, TECH.React, TECH.Sass]
  },
  {
    key: 'minesweeper',
    srcImg: 'https://raw.githubusercontent.com/fer-rouco/minesweeper/main/src/assets/images/Board.png',
    hrefCode: 'https://github.com/fer-rouco/minesweeper/',
    hrefLive: 'https://fer-rouco.github.io/minesweeper/',
    tags: [TECH.HTML, TECH.CSS3, TECH.TypeScript, TECH.Angular, TECH.Sass]
  },
  {
    key: 'marvel-characters',
    srcImg: 'https://raw.githubusercontent.com/fer-rouco/marvel-characters/main/assets/marvel-characters.png',
    hrefCode: 'https://github.com/fer-rouco/marvel-characters/',
    // hrefLive: 'https://fer-rouco.github.io/marvel-characters/',
    tags: [TECH.HTML, TECH.CSS3, TECH.TypeScript, TECH.Angular, TECH.Sass]
  },
  {
    key: 'bank-products',
    srcImg: 'https://raw.githubusercontent.com/fer-rouco/bank-products/main/assets/product-list.png',
    hrefCode: 'https://github.com/fer-rouco/bank-products/',
    // hrefLive: 'https://fer-rouco.github.io/bank-products/',
    tags: [TECH.HTML, TECH.CSS3, TECH.TypeScript, TECH.Angular, TECH.Sass]
  },
  {
    key: 'ncr-challenge',
    srcImg: 'https://raw.githubusercontent.com/fer-rouco/marvel-characters/main/assets/ncr-challenge.png',
    hrefCode: 'https://github.com/fer-rouco/ncr-challenge/',
    // hrefLive: 'https://fer-rouco.github.io/ncr-challenge/',
    tags: [TECH.HTML, TECH.CSS3, TECH.JavaScript, TECH.React, TECH.StyledComponents, TECH.Axios, TECH.AmCharts, TECH.PopperJs]
  },
  {
    key: 'eldar-challenge',
    srcImg: 'https://raw.githubusercontent.com/fer-rouco/eldar-challenge/main/assets/eldar-challenge.png',
    hrefCode: 'https://github.com/fer-rouco/eldar-challenge-client/',
    hrefLive: 'https://fer-rouco.github.io/eldar-challenge-client/',
    tags: [TECH.HTML, TECH.CSS3, TECH.JavaScript, TECH.React, TECH.StyledComponents, TECH.Axios, TECH.Node, TECH.Express, TECH.Mongoose]
  },
  {
    key: 'markdown-previewer',
    srcImg: 'https://raw.githubusercontent.com/fer-rouco/markdown-previewer/main/src/assets/screenshot.png',
    hrefCode: 'https://github.com/fer-rouco/markdown-previewer/',
    hrefLive: 'https://fer-rouco.github.io/markdown-previewer/',
    tags: [TECH.HTML, TECH.CSS3, TECH.JavaScript, TECH.React, TECH.Redux, TECH.Sass]
  },
  {
    key: 'drum-machine',
    srcImg: 'https://raw.githubusercontent.com/fer-rouco/drum-machine/main/src/assets/screenshot.png',
    hrefCode: 'https://github.com/fer-rouco/drum-machine/',
    hrefLive: 'https://fer-rouco.github.io/drum-machine/',
    tags: [TECH.HTML, TECH.CSS3, TECH.JavaScript, TECH.React, TECH.Redux, TECH.StyledComponents]
  },
  {
    key: 'javascript-calculator',
    srcImg: 'https://raw.githubusercontent.com/fer-rouco/calculator/main/src/assets/screenshot.png',
    hrefCode: 'https://github.com/fer-rouco/calculator/',
    hrefLive: 'https://fer-rouco.github.io/calculator/',
    tags: [TECH.HTML, TECH.CSS3, TECH.JavaScript, TECH.React, TECH.Sass]
  },
  {
    key: 'pomodoro-clock',
    srcImg: 'https://raw.githubusercontent.com/fer-rouco/25-5-clock/main/src/assets/screenshot.png',
    hrefCode: 'https://github.com/fer-rouco/25-5-clock/',
    hrefLive: 'https://fer-rouco.github.io/25-5-clock/',
    tags: [TECH.HTML, TECH.CSS3, TECH.JavaScript, TECH.React, TECH.Redux, TECH.Sass]
  },
  {
    key: 'random-quote-machine',
    srcImg: 'https://raw.githubusercontent.com/fer-rouco/random-quote-machine/main/assets/screenshot.png',
    hrefCode: 'https://github.com/fer-rouco/random-quote-machine/',
    hrefLive: 'https://fer-rouco.github.io/random-quote-machine/',
    tags: [TECH.HTML, TECH.CSS3, TECH.JavaScript]
  }
];

function ProjectsSection() {
  const { theme } = useTheme();
  const { t } = useTranslation('components', { keyPrefix: 'sections.projects' });
  const tCard = useTranslation('components', { keyPrefix: 'sections.projects.cards' }).t;

  const PROJECTS_WITH_TRANSLATIONS = PROJECTS.map((project) => {
    return { ...project, title: tCard(`${project.key}.title`), description: tCard(`${project.key}.description`), altImg: tCard(`${project.key}.altImg`) }
  });

  const responsive = {
    XXXLDesktop: {
      breakpoint: { max: 2688, min: 2304 },
      items: 6
    },
    XXLDesktop: {
      breakpoint: { max: 2304, min: 1920 },
      items: 5
    },
    XLDesktop: {
      breakpoint: { max: 1920, min: 1536 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1536, min: 1152 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1152, min: 600 },  
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };
  return (
    <section id='projects-section' className={`projects-section ${theme}`} >
      <h2 className='projects-section__header' >{t('title')}</h2>
      <div className='projects-section__cards' >
        <Carousel
          showDots={true}
          draggable={false}
          infinite={false}
          keyBoardControl={true}
          transitionDuration={50}
          itemClass="projects-section__cards-item"
          responsive={responsive}
        >
          {PROJECTS_WITH_TRANSLATIONS.map(project => (
            <Card
              key={project.key}
              title={project.title}
              description={project.description}
              srcImg={project.srcImg}
              altImg={project.altImg}
              hrefCode={project.hrefCode}
              hrefLive={project.hrefLive}
              tags={project.tags}>
            </Card>
          ))}
        </Carousel>
      </div>

    </section>
  );
}

export default ProjectsSection;
