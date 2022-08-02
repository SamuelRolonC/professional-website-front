import React from "react";
import { WorkItem } from "../WorkItem";
import "./WorkSection.css";
import { useTranslation } from 'react-i18next';
import { CustomContext } from "../CustomContext";

function WorkSection() {
    const { t } = useTranslation();
    const { 
        professionalData
        , currentSection
        , setCurrentSection
        , scrollFor
    } = React.useContext(CustomContext);
    const workItems = professionalData?.listWorkViewModel;
    
    React.useEffect(() => {
        scrollFor('work', currentSection, setCurrentSection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <div id="work" className="WorkSection">
            <h2>{t('section.work')}</h2>

            {workItems.map(item => (
                <WorkItem key={item.id} work={item} />
            ))}
        </div>
    );
}

export { WorkSection };