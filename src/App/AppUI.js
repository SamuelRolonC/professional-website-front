import logo from '../logo.svg';
import './App.css';
import { AboutMe } from '../AboutMe';
import { TopBar } from '../TopBar';
import { Footer } from '../Footer';
import { WorkSection } from "../WorkSection";
import { ProyectsSection } from '../ProyectsSection';
import { ContactSection } from '../ContactSection';

function AppUI() {
  return (
    <div className="App">
      <TopBar />
      <main>
        <AboutMe />
        <WorkSection />
        <ProyectsSection />
        <ContactSection />        
      </main>
      <Footer />
    </div>
  );
}

export { AppUI };
