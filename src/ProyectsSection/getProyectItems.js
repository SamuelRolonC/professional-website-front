import React from "react";

// Get proyects from fixed array. Later could be a request to an API.
function getProyectItems() {
    let proyectItems = [];
    let error = "";

    proyectItems.push({
        id: 1,
        title: "Capacitar",
        description: "Digital therapy",
        url: "https://www.google.com",
        imagePath: "test.jpeg"
    });
    
    proyectItems.push({
        id: 2,
        title: "Personal we site",
        description: "Web site with my professional information.",
        url: "https://www.google.com",
        imagePath: ""
    });

    return [
        proyectItems,
        error
    ]
}

export { getProyectItems };