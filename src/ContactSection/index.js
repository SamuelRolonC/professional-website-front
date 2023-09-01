import React from "react";
import "./ContactSection.css";
import { useTranslation } from 'react-i18next';
import { useSystemParameters } from "../CustomContext/useSystemParameters";
import { PopUpSimple } from "../PopUpSimple";
import { LoadingIndicator } from "../LoadingIndicator";
import { CustomContext } from "../CustomContext";

function ContactSection() {
    const { t } = useTranslation();
    const { getUrlPostContact } = useSystemParameters();
    const [ nameValue, setNameValue ] = React.useState("");
    const [ emailValue, setEmailValue ] = React.useState("");
    const [ messageValue, setMessageValue ] = React.useState("");
    const [ openPopUp, setOpenPopUp ] = React.useState(false);
    const [ titlePopUp, setTitlePopUp ] = React.useState("");
    const [ contentPopUp, setContentPopUp ] = React.useState("");
    const [ loadingContact, setLoadingContact ] = React.useState(false);
    const { 
        currentSection
        , setCurrentSection
        , scrollFor 
    } = React.useContext(CustomContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = e.target;
        if (!isValidContactForm(formData)) {
            generatePopUp(t('section.contact'), t('contact.message.validation'));
            return;
        }

        setLoadingContact(true);
        const body = JSON.stringify({
            name: formData.name.value,
            address: formData.email.value,
            subject: "",
            content: formData.message.value,
        });
        
        fetch(getUrlPostContact(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body,
        })
        .then(response => response.json())
        .then(data => {
            if (data.errorStatus === 0)
                generatePopUp(t('section.contact'), t('contact.message.sent'));
            else if (data.errors.length === 1 && data.errors[0].name === 'EmailInvalid')
                generatePopUp(t('section.contact'), t('contact.message.errormail'));
            else
                generatePopUp(t('section.contact'), t('contact.message.error'));

        })
        .catch((error) => {
            console.error('Error:', error);
        })
        .finally(() => {
            setLoadingContact(false);
        });
    }

    const onChangeEmail = (event) => {
        setEmailValue(event.target.value);
    }

    const onChangeName = (event) => {
        setNameValue(event.target.value);
    }

    const onChangeMessage = (event) => {
        setMessageValue(event.target.value);
    }

    const isValidEmail = (value) => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return value.match(emailRegex) != null;
    }

    const isValidName = (value) => {
        return value.match(/^[\w]{3,}$/) != null && value.length <= 255;
    }

    const isValidMessage = (value) => {
        return value.length >= 3 && value.length <= 4000;
    }

    const isValidContactForm = (formData) => {
        return isValidName(formData.name.value) 
            && isValidEmail(formData.email.value) 
            && isValidMessage(formData.message.value);
    }

    const getClassNameInputEmail = (value) => {
        return "ContactSectionFieldInput"
            +((value && !isValidEmail(value)) ? " ContactSectionInvalid" : "");
    }

    const getClassNameInputName = (value) => {
        return "ContactSectionFieldInput"
            +((value && !isValidName(value)) ? " ContactSectionInvalid" : "");
    }

    const getClassNameInputMessage = (value) => {
        return "ContactSectionFieldTextarea"
            +((value && !isValidMessage(value)) ? " ContactSectionInvalid" : "");
    }

    const generatePopUp = (title, content) => {
        console.log(title+' - '+content);
        setOpenPopUp(true);
        setTitlePopUp(title);
        setContentPopUp(content);
    }
    
    React.useEffect(() => {
        scrollFor('contact', currentSection, setCurrentSection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div id="contact" className="ContactSection">
            <h2>{t('section.contact')}</h2>
            <div className="ContactSectionContainer">
                {!loadingContact &&
                    <form onSubmit={onSubmit}>
                        <div className="ContactSectionField">
                            <div className="ContactSectionDisplay">
                                <label htmlFor={"name"}>{t('contact.name')}</label>
                                <label className="ContactSectionExample">
                                    {t('contact.example.name')}
                                </label>
                            </div>
                            <input 
                                id="name" 
                                name="name"
                                value={nameValue}
                                onChange={onChangeName}
                                className={getClassNameInputName(nameValue)}
                                ></input>
                        </div>
                        <div className="ContactSectionField">
                            <div className="ContactSectionDisplay">
                                <label htmlFor={"email"}>{t('contact.email')}</label>
                                <label className="ContactSectionExample">
                                    {t('contact.example.email')}
                                </label>
                            </div>
                            <input 
                                id="email" 
                                name="email" 
                                value={emailValue} 
                                onChange={onChangeEmail}
                                className={getClassNameInputEmail(emailValue)}
                                ></input>
                        </div>
                        <div className="ContactSectionField">
                            <label htmlFor={"message"}></label>
                            <textarea 
                                id="message" 
                                name="message" 
                                placeholder={t('contact.messagePlaceholder')} 
                                rows={10}
                                value={messageValue}
                                onChange={onChangeMessage}
                                className={getClassNameInputMessage(messageValue)}>
                            </textarea>
                        </div>
                        <button type="submit">{t('contact.send')}</button>
                    </form>
                }
                {loadingContact && 
                    <LoadingIndicator id="Contact" />
                }
            </div>
            <PopUpSimple 
                setOpen={setOpenPopUp} 
                open={openPopUp}
                title={titlePopUp}
                content={contentPopUp}
            >
            </PopUpSimple>
        </div>
    );
}

export { ContactSection };