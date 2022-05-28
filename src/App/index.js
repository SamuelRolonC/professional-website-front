import React from "react";
import { AppUI } from "./AppUI";
import { CustomProvider } from "../CustomContext";

function App() {    
    return (
        <CustomProvider>
            <AppUI />
        </CustomProvider>
    );
}

export default App;