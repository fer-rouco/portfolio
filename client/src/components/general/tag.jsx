import "./tag.scss";

export const TECH = Object.freeze({
  HTML: { backgroundColor: '#FF6D00', color: '#F0F0F0', text: 'HTML', tooltip: 'HTML5', href: 'https://html.spec.whatwg.org/dev/' },
  CSS3: { backgroundColor: '#049BE5', color: '#F0F0F0', text: 'CSS', tooltip: 'CSS3', href: 'https://www.css3.com/' },
  JavaScript: { backgroundColor: '#FED600', color: '#303841', text: 'JS', tooltip: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  React: { backgroundColor: '#88B4ED', color: '#000000', text: 'React', tooltip: 'ReactJs', href: 'https://reactjs.org/' },
  Redux: { backgroundColor: '#7E56C2', color: '#F0F0F0', text: 'Redux', tooltip: 'Redux', href: 'https://redux.js.org/' },
  Sass: { backgroundColor: '#F06292', color: '#F0F0F0', text: 'Sass', tooltip: 'Sass', href: 'https://sass-lang.com/' },
  StyledComponents: { backgroundColor: '#F50057', color: '#F0F0F0', text: 'SC', tooltip: 'Styled Components', href: 'https://styled-components.com/' }
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