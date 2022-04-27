import React from "react";
import "./WorkItem.css";

function WorkItem(props) {
    const work = props.work;

    return (
        <div className="WorkItemContainer">
            <p className="WorkItemTitle">{work.position + " at " + work.company.name}</p>&nbsp;
            <a href={work.company.url} className="WorkItemUrl">{"(" + work.company.url.replace("https://", "") + ")"}</a>
            <p className="WorkItemLocation">{work.company.location}</p>
            <p className="WorkItemDuration">{
                work.isCurrentJob 
                ? work.startDate + " - Present"
                : work.startDate + " - " + work.endDate 
            }</p>
            <p className="WorkItemDescription">{work.description}</p>
                            
        </div>
    );
}

export { WorkItem };