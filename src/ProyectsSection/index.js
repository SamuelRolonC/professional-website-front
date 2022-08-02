import React from "react";
import "./ProyectsSection.css";
import { ProyectItem } from "../ProyectItem";
import { useTranslation } from 'react-i18next';
import { CustomContext } from "../CustomContext";

function ProyectsSection() {
    const { t } = useTranslation();
    const { 
        professionalData
        , currentSection
        , setCurrentSection
        , scrollFor
    } = React.useContext(CustomContext);
    const proyectItems = professionalData?.listProjectViewModel;

    React.useEffect(() => {
        scrollFor('proyects', currentSection, setCurrentSection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div id="proyects" className="ProyectsSection">
            <h2>{t('section.proyects')}</h2>
            
            {proyectItems.map(item => (
                <ProyectItem key={item.id} proyect={item} />
            ))}
        </div>
    );
}

export { ProyectsSection };