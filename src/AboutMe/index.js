import React from "react";
import "./AboutMe.css";
import { CustomIcon } from "../CustomIcon";
import { CustomContext } from "../CustomContext";
import { NewLineText } from "../NewLineText";

function AboutMe() {
    const { 
        professionalData
        , currentSection
        , setCurrentSection
        , scrollFor 
    } = React.useContext(CustomContext);
    const aboutMe = professionalData?.aboutMeViewModel;
    
    React.useEffect(() => {
        scrollFor('aboutMe', currentSection, setCurrentSection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div id="aboutme">
            <div className="AboutMeContainer">
                <h2 className="AboutMeTitle">{aboutMe.title}</h2>
                <NewLineText text={aboutMe.text} />
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