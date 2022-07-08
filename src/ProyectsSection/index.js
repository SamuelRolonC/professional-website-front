import React from "react";
import "./ProyectsSection.css";
import { getProyectItems } from "./getProyectItems";
import { ProyectItem } from "../ProyectItem";
import { useTranslation } from 'react-i18next';
import { CustomContext } from "../CustomContext";

function ProyectsSection() {
    const { t } = useTranslation();
    // const [ proyectItems, error ] = getProyectItems();
    const { professionalData } = React.useContext(CustomContext);
    const proyectItems = professionalData?.listProjectViewModel;

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