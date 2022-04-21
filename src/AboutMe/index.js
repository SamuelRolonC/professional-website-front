import React from "react";
import "./AboutMe.css";
import logo from '../logo.svg';

function AboutMe() {
    const aboutMeText = "I'm a web developer in a software consultancy company, HS " +
        "Consulting. I work mostly with .Net Core C#, JavaScript and Oracle databases.";
        
    return(
        <div>
            <div className="AboutMeContainer">
                <h2 className="AboutMeTitle">Hi, I'm Samuel</h2>
                <p>{aboutMeText}</p>
            </div>
            <div className="Tools">
                <img src={logo} alt="tool"></img>                
                <img src={logo} alt="tool"></img>                
                <img src={logo} alt="tool"></img>                
                <img src={logo} alt="tool"></img>                
                <img src={logo} alt="tool"></img>                
                <img src={logo} alt="tool"></img>                
            </div>
        </div>
    );
}

export { AboutMe };