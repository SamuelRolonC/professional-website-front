import React from "react";
import "./AboutMe.css";
import { CustomIcon } from "../CustomIcon";
import { CustomContext } from "../CustomContext";

function AboutMe() {
    // const aboutMeText = "I'm a web developer in a software consultancy company, HS " +
    //     "Consulting. I work mostly with .Net Core C#, JavaScript and Oracle databases.\n" +
    //     "I am System Analyst who studied at Beltrán Technological Institute in Avellaneda, " + 
    //     "Buenos Aires. I keep my learning in an autodidactic way.";
    const { professionalData } = React.useContext(CustomContext);
    const aboutMe = professionalData?.aboutMeViewModel;
    
    return(
        <div id="aboutme">
            <div className="AboutMeContainer">
                <h2 className="AboutMeTitle">{aboutMe.title}</h2>
                <p>{aboutMe.text}</p>
            </div>
            <div className="Tools">
                <CustomIcon type="csharp" />
                <CustomIcon type="dotnet" color="#f2f2f2"/>
                <CustomIcon type="js" />
                <CustomIcon type="git" />
                <CustomIcon type="oracle" />
            </div>
        </div>
    );
}

export { AboutMe };