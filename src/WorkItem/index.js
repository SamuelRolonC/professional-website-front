import React from "react";
import "./WorkItem.css";
import { getTextMonth, getYear } from "../Helpers/convert"
import { useTranslation } from "react-i18next";
import { NewLineText } from "../NewLineText";

function WorkItem(props) {
    const work = props.work;
    const { t } = useTranslation();
    const startDate = t('months.'+getTextMonth(work.startDate))+" "+getYear(work.startDate);
    const endDate = t('months.'+getTextMonth(work.endDate))+" "+getYear(work.endDate);

    return (
        <div className="WorkItemContainer">
            <p className="WorkItemTitle">{work.position + " at " + work.company.name}</p>&nbsp;
            <a href={work.company.url} className="WorkItemUrl">{"(" + work.company.url.replace("https://", "") + ")"}</a>
            <p className="WorkItemLocation">{work.company.location}</p>
            <p className="WorkItemDuration">{
                work.isCurrentJob 
                ? startDate + " - " + t('work.present')
                : startDate + " - " + endDate 
            }</p>
            <NewLineText text={work.description} />
        </div>
    );
}

export { WorkItem };