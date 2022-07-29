import React from 'react';
import './App.css';
import { AboutMe } from '../AboutMe';
import { TopBar } from '../TopBar';
import { Footer } from '../Footer';
import { WorkSection } from "../WorkSection";
import { ProyectsSection } from '../ProyectsSection';
import { ContactSection } from '../ContactSection';
import { CustomContext } from '../CustomContext';
import { LoadingIndicator } from '../LoadingIndicator';
import { ErrorIndicator } from '../ErrorIndicator';

function AppUI() {
  const { loading, error } = React.useContext(CustomContext);
  
  return (
    <div className='App'>
      <TopBar />
      {loading && 
        <main className='PrimaryColor'>
          <LoadingIndicator id="General" />
        </main>
      }
      {!loading && error && 
        <main className='PrimaryColor'>
          <ErrorIndicator />
        </main>
      }
      {!loading && !error && 
        <main className='PrimaryColor'>
          <AboutMe />
          <WorkSection />
          <ProyectsSection />
          <ContactSection />        
        </main>
      }
      <Footer />        
    </div>
  );
}

export { AppUI };
