import React from "react";
import { useTranslation } from "react-i18next";
import { useSystemParameters } from "./useSystemParameters";

function useClientData() {
    const [ professionalData, setProfessionalData ] = React.useState(null);
    const [ loading, setLoading ] = React.useState(true);
    const [ error, setError ] = React.useState(false);
    const { i18n } = useTranslation();
    const { getUrlProfessionalData } = useSystemParameters();

    React.useEffect(() => {
        async function getData() {
            try {
                const url = getUrlProfessionalData(i18n.resolvedLanguage);

                const response = await fetch(url, {
                    cache: 'no-cache',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                });                
                
                if (response.ok) {
                    const data = await response.json();

                    setProfessionalData(data);
                    setLoading(false);
                } else {
                    setError("Error en servidor");
                    setLoading(false);
                }
            } catch(error) {
                setError(error);
                setLoading(false);
            }
        };
        getData();
    }, [i18n.resolvedLanguage, loading]);

    return {
        professionalData,
        loading,
        error,        
    }
}

export { useClientData };