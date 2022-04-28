import React from "react";
import "./TopBar.css";
import { TwitterIcon } from "../CustomIcon/TwitterIcon";
import { LinkedinIcon } from "../CustomIcon/LinkedinIcon";
import { useTranslation, Trans } from 'react-i18next';

function TopBar() {
    const { t, i18n } = useTranslation();

    return (
        <nav className="TopBar">
            <div className="TopBarHead">
                <h1>Samuel Rolon Cicciari</h1>
                <div className="TopBarMedia">
                    <a href="https://twitter.com/"><TwitterIcon /></a>
                    <a href="https://www.linkedin.com/"><LinkedinIcon /></a>
                </div>
                <div className="TopBarLanguage">
                    <button onClick={() => i18n.changeLanguage('en')} title="English">EN</button>
                    <button onClick={() => i18n.changeLanguage('es')} title="Español">ES</button>
                </div>
            </div>
            <div className="TopBarSections">
                <a href="#aboutme">{t('topbar.aboutMe')}</a>
                <a href="#work">{t('topbar.work')}</a>
                <a href="#proyects">{t('topbar.proyects')}</a>
                <a href="#contact">{t('topbar.contact')}</a>
            </div>
        </nav>
    );
}

export { TopBar };