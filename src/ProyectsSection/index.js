import React from "react";
import "./ProyectsSection.css";
import { getProyectItems } from "./getProyectItems";
import { ProyectItem } from "../ProyectItem";

function ProyectsSection() {
    const [ proyectItems, error ] = getProyectItems();

    return (
        <div id="proyects" className="ProyectsSection">
            <h2>Proyects</h2>
            
            {proyectItems.map(item => (
                <ProyectItem key={item.id} proyect={item} />
            ))}
        </div>
    );
}

export { ProyectsSection };