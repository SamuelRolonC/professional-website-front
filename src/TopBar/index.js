import React from "react";
import "./TopBar.css";
import { TwitterIcon } from "../CustomIcon/TwitterIcon";
import { LinkedinIcon } from "../CustomIcon/LinkedinIcon";

function TopBar() {
    return (
        <nav className="TopBar">
            <div className="TopBarHead">
                <h1>Samuel Rolon Cicciari</h1>
                <div className="TopBarMedia">
                    <a href="https://twitter.com/"><TwitterIcon /></a>
                    <a href="https://www.linkedin.com/"><LinkedinIcon /></a>
                </div>
            </div>
            <div className="TopBarSections">
                <a href="#about-me-section">About me</a>
                <a href="#work-section">Work</a>
                <a href="#proyect-section">Proyects</a>
                <a href="#contact-section">Contact</a>
            </div>
        </nav>
    );
}

export { TopBar };