import React from "react";
import "./ProyectItem.css";

function ProyectItem(props) {
    const proyect = props.proyect;

    const getValidImagePath = (path) => {
        let finalPath = require("../img/default.png");

        if (path) 
            finalPath = require(`./${path}`);

        return finalPath;
    }

    return (
        <div className="ProyectItemContainer">
            <p className="ProyectItemTitle">{proyect.title}</p>
            <img src={getValidImagePath(proyect.imagePath)} alt="proyect"></img>
            <a href={proyect.url} className="ProyectItemUrl">{proyect.url.replace("https://", "")}</a>
            <p className="ProyectItemDescription">{proyect.description}</p>                            
        </div>
    );
}

export { ProyectItem };