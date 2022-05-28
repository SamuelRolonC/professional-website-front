import React from 'react';
import './App.css';
import { AboutMe } from '../AboutMe';
import { TopBar } from '../TopBar';
import { Footer } from '../Footer';
import { WorkSection } from "../WorkSection";
import { ProyectsSection } from '../ProyectsSection';
import { ContactSection } from '../ContactSection';
import { CustomContext } from '../CustomContext';

function AppUI() {
  const { loading, error } = React.useContext(CustomContext);
  
  return (
    <div className='App'>
      <TopBar />
      {loading && 
        <main className='PrimaryColor'>
          <p style={{color: 'white'}}>Loading...</p>
        </main>
      }
      {error && 
        <main className='PrimaryColor'>
          <p style={{color: 'white'}}>{error.message}</p>
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
