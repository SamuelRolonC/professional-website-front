import React from "react";
import "./TopBar.css";
import { TwitterIcon } from "../CustomIcon/TwitterIcon";
import { LinkedinIcon } from "../CustomIcon/LinkedinIcon";
import { useTranslation } from 'react-i18next';

function TopBar() {
    const { t, i18n } = useTranslation();

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
                    </div>
                </div>
                <div className="TopBarSections">
                    <a href="#aboutme">{t('section.aboutMe')}</a>
                    <a href="#work">{t('section.work')}</a>
                    <a href="#proyects">{t('section.proyects')}</a>
                    <a href="#contact">{t('section.contact')}</a>
                </div>
            </nav>
        </div>
    );
}

export { TopBar };