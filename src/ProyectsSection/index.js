import React from "react";
import "./ProyectsSection.css";
import { getProyectItems } from "./getProyectItems";
import { ProyectItem } from "../ProyectItem";
import { useTranslation } from 'react-i18next';

function ProyectsSection() {
    const { t } = useTranslation();
    const [ proyectItems, error ] = getProyectItems();

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