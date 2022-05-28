import React from "react";
import "./ContactSection.css";
import { useTranslation } from 'react-i18next';

function ContactSection() {
    const { t } = useTranslation();

    const onSubmit = (e) => {
        e.preventDefault();

        let data = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        }

        alert(JSON.stringify(data));
    }

    return (
        <div id="contact" className="ContactSection">
            <h2>{t('section.contact')}</h2>
            
            <div className="ContactSectionContainer">
                <form onSubmit={onSubmit}>
                    <div className="ContactSectionField">
                        <label htmlFor={"name"}>{t('contact.name')}</label>
                        <input id="name" name="name"></input>
                    </div>
                    <div className="ContactSectionField">
                        <label htmlFor={"email"}>{t('contact.email')}</label>
                        <input id="email" name="email"></input>
                    </div>
                    <div className="ContactSectionField">
                        <label htmlFor={"message"}></label>
                        <textarea 
                            id="message" 
                            name="message" 
                            placeholder={t('contact.messagePlaceholder')} 
                            rows={10}>
                        </textarea>
                    </div>
                    <button type="submit">{t('contact.send')}</button>
                </form>
            </div>
        </div>
    );
}

export { ContactSection };