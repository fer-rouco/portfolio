import "./tag.scss";

export const TECH = Object.freeze({
  HTML: { backgroundColor: '#C44600', color: '#FFFFFF', text: 'HTML', tooltip: 'HTML5', href: 'https://html.spec.whatwg.org/dev/' },
  CSS3: { backgroundColor: '#0277BD', color: '#FFFFFF', text: 'CSS', tooltip: 'CSS3', href: 'https://www.css3.com/' },
  JavaScript: { backgroundColor: '#FED600', color: '#303841', text: 'JS', tooltip: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  TypeScript: { backgroundColor: '#27609E', color: '#FFFFFF', text: 'TS', tooltip: 'TypeScript', href: 'https://www.typescriptlang.org/' },
  Angular: { backgroundColor: '#C3002F', color: '#FFFFFF', text: 'Angular', tooltip: 'Angular', href: 'https://angular.dev/' },
  React: { backgroundColor: '#88B4ED', color: '#000000', text: 'React', tooltip: 'ReactJs', href: 'https://reactjs.org/' },
  Redux: { backgroundColor: '#7E56C2', color: '#FFFFFF', text: 'Redux', tooltip: 'Redux', href: 'https://redux.js.org/' },
  Sass: { backgroundColor: '#BE4080', color: '#FFFFFF', text: 'Sass', tooltip: 'Sass', href: 'https://sass-lang.com/' },
  StyledComponents: { backgroundColor: '#ECA7E7', color: '#000000', text: 'SC', tooltip: 'Styled Components', href: 'https://styled-components.com/' }
});

function Tag({ backgroundColor, color, text, tooltip, href, className, tech }) {
  return (
    <a className='tag-link' href={href || tech?.href} target='_blank' >
      <span
        className={`tag-link__span ${className || ''}`}
        style={{backgroundColor: `${backgroundColor || tech?.backgroundColor}`, color: `${color || tech?.color}`}}
        title={tooltip || tech?.tooltip} >
        {text || tech?.text}
      </span>
    </a>
  );
}

export default Tag;