import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCheckCircle, FaDotCircle } from 'react-icons/fa';
import './CustomIcon.css';

function SentIcon() {
    const { t } = useTranslation();

    return (
        <div className='PopUpContactVisual'>
            <div className='PopUpContactSteps'>
                <FaCheckCircle id='Send' fill={'#27941b'} className='PopUpContactIcon' />
                <span>{t('contact.popUpIcon.sent')}</span>
            </div>
            <div className='PopUpContactSteps'>
                <FaDotCircle id='Verification' fill={'#525151'} className='PopUpContactIcon' />
                <span>{t('contact.popUpIcon.verification')}</span>
            </div>
        </div>
    )
}

export { SentIcon };