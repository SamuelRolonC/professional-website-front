import React, { Fragment } from 'react';
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
import { BlogSection } from '../BlogSection';

function AppUI() {
  const { loading, error, viewLayout } = React.useContext(CustomContext);

  return (
    <div className='App'>
      <TopBar />
      <main className='PrimaryColor'>
        {loading && 
          <LoadingIndicator id="General" />
        }
        {!loading && error && 
          <ErrorIndicator />
        }
        {!loading && !error && viewLayout === 'main' &&
          <Fragment>
            <AboutMe />
            <WorkSection />
            <ProyectsSection />
            <ContactSection />        
          </Fragment>
        }
        {!loading && !error && viewLayout === 'blog' &&
          <BlogSection />
        }
      </main>
      <Footer />        
    </div>
  );
}

export { AppUI };
