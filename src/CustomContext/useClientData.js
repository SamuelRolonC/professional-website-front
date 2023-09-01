import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSystemParameters } from "./useSystemParameters";

function useClientData() {
    const [ professionalData, setProfessionalData ] = React.useState(null);
    const [ loading, setLoading ] = React.useState(true);
    const [ error, setError ] = React.useState(false);
    const { i18n } = useTranslation();
    const { getUrlProfessionalData } = useSystemParameters();
    
    const getData = useCallback(async () => {
        try {
            setLoading(true);

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
                setError("");
            } else {
                setError("Server error.");
                setLoading(false);
            }
        } catch(error) {
            setError(error);
            setLoading(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [i18n.resolvedLanguage]);

    React.useEffect(() => {
        getData();
    }, [i18n.resolvedLanguage, getData]);

    return {
        professionalData,
        loading,
        error,
        getData
    }
}

export { useClientData };