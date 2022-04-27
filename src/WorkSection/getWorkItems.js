import React from "react";

// Get works from fixed array. Later could be a request to an API.
function getWorkItems() {
    let workItems = [];
    let error = "";

    workItems.push({
        id: 1,
        company: {
            name: "HS Consulting",
            url: "https://www.hsconsulting.com.ar",
            location: "Ciudad Autónoma de Buenos Aires, Argentina"
        },
        position: "Desarrollador Jr",
        description: "I work in a reinsurance managing application, the main proyect of the company and in a printing insurance policy application.",
        startDate: "Febrero 2020",
        endDate: "",
        isCurrentJob: true,
        type: "Remote"
    });
    
    workItems.push({
        id: 2,
        company: {
            name: "EDSI Trend Argentina",
            url: "https://www.edsitrend.com/",
            location: "Ciudad Autónoma de Buenos Aires, Argentina"
        },
        position: "Technical Support",
        description: "Technical support specialized in Trend Micro cyber security products. Tasks include implementation, migration and mainteinance of products.",
        startDate: "August 2018",
        endDate: "June 2019",
        isCurrentJob: false,
        type: "Remote"
    });

    return [
        workItems,
        error
    ]
}

export { getWorkItems };