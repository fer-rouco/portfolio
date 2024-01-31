import Card from "../general/card";
import { TECH } from "../general/tag";
import "./projects-section.scss";

const PROJECTS = [
  {
    key: 'markdown-previewer',
    title:'Markdown Previewer',
    description:'App to edit and previsualize your markdowns.',
    srcImg:'https://raw.githubusercontent.com/fer-rouco/markdown-previewer/main/src/assets/screenshot.png',
    altImg:'Markdow Previewer Image',
    hrefCode:'https://github.com/fer-rouco/markdown-previewer/',
    hrefLive:'https://fer-rouco.github.io/markdown-previewer/',
    tags: [TECH.HTML, TECH.CSS3, TECH.JavaScript, TECH.React, TECH.Redux, TECH.Sass]
  },
  {
    key: 'drum-machine',
    title:'Drum Machine',
    description:'App to play the drum with your keyboard.',
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
  }
];

function ProjectsSection() {
  return (
    <section id='projects-section' className='projects-section' >
      
      <h2 className='projects-section__header' >Some things I've worked on</h2>

      <div className='projects-section__cards' >
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
      </div>

    </section>
  );
}

export default ProjectsSection;
