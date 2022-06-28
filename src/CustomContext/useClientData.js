import React from "react";
import { useTranslation } from "react-i18next";

function useClientData() {
    const [professionalData, setProfessionalData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const { i18n } = useTranslation();

    React.useEffect(() => {
        async function getData() {
            try {
                const url = `https://localhost:44342/client/getprofessionaldata?lang=${i18n.resolvedLanguage}`;
    
                const response = await fetch(url, {
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    headers: {
                    'Content-Type': 'application/json'
                    },
                });                
                
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);

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
    }, [loading]);

    return {
        professionalData,
        loading,
        error,        
    }
}

export { useClientData };