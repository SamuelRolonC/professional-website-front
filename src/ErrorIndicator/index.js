import React from "react";
import { useTranslation } from "react-i18next";
import { CustomContext } from "../CustomContext";
import './ErrorIndicator.css';

function ErrorIndicator() {
    const { t } = useTranslation();
    const { getData } = React.useContext(CustomContext);
    
    return (
        <div className="ErrorIndicatorContainer">
            <span className="ErrorIndicatorSpan">{t('pageerror.message')}</span>
            <button 
                className="ErrorIndicatorButton" 
                type="button"
                onClick={() => getData()}
                >
                    {t('pageerror.button')}
            </button>
        </div>
    )
}

export { ErrorIndicator };