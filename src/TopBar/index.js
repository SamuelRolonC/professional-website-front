import React from "react";
import "./TopBar.css";

function TopBar() {
    return (
        <nav className="TopBar">
            <div className="TopBarHead">
                <h1>Samuel Rolon Cicciari</h1>
                <div className="TopBarMedia">
                    <a href="https://twitter.com/">Twitter</a>
                    <a href="https://www.linkedin.com/">LinkedIn</a>
                </div>
            </div>
            <div className="TopBarSections">
                <a href="#about-me-section">About me</a>
                <a href="#work-section">Work</a>
                <a href="#proyect-section">Proyect</a>
                <a href="#contact-section">Contact</a>
            </div>
        </nav>
    );
}

export { TopBar };