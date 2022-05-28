import React from "react";
import { getWorkItems } from "./getWorkItems";
import { WorkItem } from "../WorkItem";
import "./WorkSection.css";
import { useTranslation } from 'react-i18next';
import { CustomContext } from "../CustomContext";

function WorkSection() {
    const { t } = useTranslation();
    const { professionalData } = React.useContext(CustomContext);
    const workItems = professionalData?.listWorkViewModel;
    
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