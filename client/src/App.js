import './App.scss';
import { ThemeProvider } from './contexts/theme-context';
import NavBar from './components/bars/nav-bar';
import WelcomeSection from './components/sections/welcome-section';
import ProjectsSection from './components/sections/projects-section';
import ContactSection from './components/sections/contact-section';
import FooterContet from './components/footer-content';

function App() {
  return (
    <>
      <ThemeProvider>
        <header>
          <NavBar></NavBar>
        </header>
        <main>
          <WelcomeSection></WelcomeSection>
          <ProjectsSection></ProjectsSection>
          <ContactSection></ContactSection>
        </main>
        <footer>
          <FooterContet></FooterContet>
        </footer>
      </ThemeProvider>
    </>
  );
}

export default App;
