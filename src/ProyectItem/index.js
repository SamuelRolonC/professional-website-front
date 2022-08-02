import React from "react";
import "./ProyectItem.css";
import { NewLineText } from "../NewLineText";
import { CustomContext } from "../CustomContext";

function ProyectItem(props) {
    const getValidImagePath = (path) => {
        let finalPath = require("../img/default.png");

        if (path) 
            finalPath = require(`./${path}`);

        return finalPath;
    }

    return (
        <div className="ProyectItemContainer">
            <p className="ProyectItemTitle">{props.proyect.title}</p>
            <img src={getValidImagePath(props.proyect.imagePath)} alt="proyect"></img>
            <a 
                href={props.proyect.url} 
                className="ProyectItemUrl">
                    {props.proyect.url.replace("https://", "")}
            </a>
            <NewLineText text={props.proyect.description} />
        </div>
    );
}

export { ProyectItem };