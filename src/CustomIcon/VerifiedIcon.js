import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCheckCircle, FaDotCircle } from 'react-icons/fa';
import './CustomIcon.css';

function VerifiedIcon() {
    const { t } = useTranslation();

    return (
        <div className='PopUpContactVisual'>
            <div className='PopUpContactSteps'>
                <FaCheckCircle id='Send' fill={'green'} className='PopUpContactIcon' />
                <span>{t('contact.popUpIcon.sent')}</span>
            </div>
            <div className='PopUpContactSteps'>
                <FaCheckCircle id='Verification' fill={'green'} className='PopUpContactIcon' />
                <span>{t('contact.popUpIcon.verified')}</span>
            </div>
        </div>
    )
}

export { VerifiedIcon };