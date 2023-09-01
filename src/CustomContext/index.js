import React, { useState } from "react";
import { useClientData } from "./useClientData";

const CustomContext = React.createContext();

function CustomProvider(props) {
    const {
        professionalData,
        loading,
        error,
        getData
    } = useClientData();
    const [ viewLayout, setViewLayout ] = useState('main');
    const [ currentSection, setCurrentSection ] = useState();
    const scrollFor = (section, valueState, setValueState) => {
        if (valueState === section) {
            document.querySelector('#'+valueState).scrollIntoView({behavior: 'smooth'});
            setValueState('');
        }
    }

    return (
        <CustomContext.Provider value={{
            professionalData,
            loading,
            error,
            getData,
            viewLayout,
            setViewLayout,
            currentSection,
            setCurrentSection,
            scrollFor
        }}>
            {props.children}
        </CustomContext.Provider>
    );
}

export { CustomContext, CustomProvider };