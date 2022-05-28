import React from "react";
import { useClientData } from "./useClientData";

const CustomContext = React.createContext();

function CustomProvider(props) {
    const {
        professionalData,
        loading,
        error
    } = useClientData();

    return (
        <CustomContext.Provider value={{
            professionalData,
            loading,
            error
        }}>
            {props.children}
        </CustomContext.Provider>
    );
}

export { CustomContext, CustomProvider };