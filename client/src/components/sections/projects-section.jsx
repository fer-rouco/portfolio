import Card from "../general/card";
import { TECH } from "../general/tag";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTheme } from '../../contexts/theme-context';
import "./projects-section.scss";

const PROJECTS = [
  {
    key: 'portfolio',
    title:'Portfolio',
    description:'Personal portfolio with presentation, projects and contact me section.',
    srcImg:'https://raw.githubusercontent.com/fer-rouco/minesweeper/main/assets/Portfolio.png',
    altImg:'Portfolio',
    hrefCode:'https://github.com/fer-rouco/portfolio/',
    hrefLive:'https://fer-rouco.github.io/portfolio/',
    tags: [TECH.HTML, TECH.CSS3, TECH.JavaScript, TECH.React, TECH.Sass]
  },
  {
    key: 'minesweeper',
    title:'Minesweeper',
    description:'Puzzle game with the aim of clear an abstract minefield without detonating a mine.',
    srcImg:'https://raw.githubusercontent.com/fer-rouco/minesweeper/main/src/assets/images/Board.png',
    altImg:'Minesweeper Image',
    hrefCode:'https://github.com/fer-rouco/minesweeper/',
    hrefLive:'https://fer-rouco.github.io/minesweeper/',
    tags: [TECH.HTML, TECH.CSS3, TECH.TypeScript, TECH.Angular, TECH.Sass]
  },
  {
    key: 'markdown-previewer',
    title:'Markdown Previewer',
    description:'Edit and previsualize your markdowns with this app.',
    srcImg:'https://raw.githubusercontent.com/fer-rouco/markdown-previewer/main/src/assets/screenshot.png',
    altImg:'Markdow Previewer Image',
    hrefCode:'https://github.com/fer-rouco/markdown-previewer/',
    hrefLive:'https://fer-rouco.github.io/markdown-previewer/',
    tags: [TECH.HTML, TECH.CSS3, TECH.JavaScript, TECH.React, TECH.Redux, TECH.Sass]
  },
  {
    key: 'drum-machine',
    title:'Drum Machine',
    description:'Are you a musician? Play the drum with your keyboard using this App.',
    srcImg:'https://raw.githubusercontent.com/fer-rouco/drum-machine/main/src/assets/screenshot.png',
    altImg:'Drum Machine Image',
    hrefCode:'https://github.com/fer-rouco/drum-machine/',
    hrefLive:'https://fer-rouco.github.io/drum-machine/',
    tags: [TECH.HTML, TECH.CSS3, TECH.JavaScript, TECH.React, TECH.Redux, TECH.StyledComponents]
  },
  {
    key: 'javascript-calculator',
    title:'Javascript Calculator',
    description:'App that allows you to do your arithmetic calculations.',
    srcImg:'https://raw.githubusercontent.com/fer-rouco/calculator/main/src/assets/screenshot.png',
    altImg:'Javascript Calculator Image',
    hrefCode:'https://github.com/fer-rouco/calculator/',
    hrefLive:'https://fer-rouco.github.io/calculator/',
    tags: [TECH.HTML, TECH.CSS3, TECH.JavaScript, TECH.React, TECH.Sass]
  },
  {
    key: 'pomodoro-clock',
    title:'Pomodoro 25 + 5 Clock',
    description:'App to apply the Pomodoro Technique to your daily tasks.',
    srcImg:'https://raw.githubusercontent.com/fer-rouco/25-5-clock/main/src/assets/screenshot.png',
    altImg:'Pomodoro (25+5) Clock Image',
    hrefCode:'https://github.com/fer-rouco/25-5-clock/',
    hrefLive:'https://fer-rouco.github.io/25-5-clock/',
    tags: [TECH.HTML, TECH.CSS3, TECH.JavaScript, TECH.React, TECH.Redux, TECH.Sass]
  },
  {
    key: 'random-quote-machine',
    title:'Random Quote Machine',
    description:'App which randomly shows quotes from different authors.',
    srcImg:'https://raw.githubusercontent.com/fer-rouco/random-quote-machine/main/assets/screenshot.png',
    altImg:'Random quote machine Image',
    hrefCode:'https://github.com/fer-rouco/random-quote-machine/',
    hrefLive:'https://fer-rouco.github.io/random-quote-machine/',
    tags: [TECH.HTML, TECH.CSS3, TECH.JavaScript]
  }
];

function ProjectsSection() {
  const { theme } = useTheme();
  
  const responsive = {
    XXLDesktop: {
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
      <h2 className='projects-section__header' >Some things I've worked on</h2>
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
          {PROJECTS.map(project => (
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
