import React from "react";
import { getWorkItems } from "./getWorkItems";
import { WorkItem } from "../WorkItem";
import "./WorkSection.css";

function WorkSection() {
    const [ workItems, error ] = getWorkItems();

    return (
        <div className="WorkSection">
            <h2>Work</h2>

            {workItems.map(item => (
                <WorkItem key={item.id} work={item} />
            ))}
        </div>
    );
}

export { WorkSection };