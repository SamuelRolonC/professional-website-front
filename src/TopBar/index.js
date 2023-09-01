import React from "react";
import "./TopBar.css";
import { TwitterIcon } from "../CustomIcon/TwitterIcon";
import { LinkedinIcon } from "../CustomIcon/LinkedinIcon";
import { useTranslation } from 'react-i18next';
import { CustomContext } from '../CustomContext';

function TopBar() {
    const { t, i18n } = useTranslation();
    const { viewLayout, setViewLayout, setCurrentSection } = React.useContext(CustomContext);

    const scrollToSection = (e) => { 
        const section = e.target.value;

        if (viewLayout === 'main') {
            document.querySelector('#'+section).scrollIntoView({behavior: 'smooth'});
            setCurrentSection('');
        } else {
            setViewLayout('main');
            setCurrentSection(section);
        }
    }
    
    return (
        <div className="TopBarContainer PrimaryColor">
            <nav className="TopBar">
                <div className="TopBarHead">
                    <h1>Samuel Rolon Cicciari</h1>
                    <div className="TopBarMedia">
                        <a href="https://twitter.com/"><TwitterIcon /></a>
                        <a href="https://www.linkedin.com/"><LinkedinIcon /></a>
                    </div>
                    <div className="TopBarLanguage">
                        <button onClick={() => i18n.changeLanguage('en')} title={t('topbar.english')}>EN</button>
                        <button onClick={() => i18n.changeLanguage('es')} title={t('topbar.spanish')}>ES</button>
                        <button onClick={() => i18n.changeLanguage('pt')} title={t('topbar.portuguese')}>PT</button>
                    </div>
                </div>
                <div className="TopBarSections">
                    <button
                        value={'aboutme'}
                        onClick={e => scrollToSection(e)}>
                            {t('section.aboutMe')}
                    </button>
                    <button
                        value={'work'}
                        onClick={e => scrollToSection(e)}>
                            {t('section.work')}
                    </button>
                    <button
                        value={'proyects'}
                        onClick={e => scrollToSection(e)}>
                            {t('section.proyects')}
                    </button>
                    <button
                        value={'contact'}
                        onClick={e => scrollToSection(e)}>
                            {t('section.contact')}
                    </button>
                    <button 
                        type="button" 
                        onClick={() => setViewLayout('blog')}>
                            {t('section.blog')}
                    </button>
                </div>
            </nav>
        </div>
    );
}

export { TopBar };