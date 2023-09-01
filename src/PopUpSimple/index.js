import React from "react";
import Popup from "reactjs-popup";
import { useTranslation } from 'react-i18next';
import "./PopUpSimple.css";

function PopUpSimple(props) {
    const { t } = useTranslation();
    const closeModal = () => props.setOpen(false);
    
    return (
        <Popup open={props.open} onClose={closeModal} closeOnEscape closeOnDocumentClick>
            {close => (
                <div className="Modal">
                    <div className="ModalHeader"> 
                        <span>{props.title}</span>
                    </div>
                    <div className="ModalContent">
                        {props.content}
                    </div>
                    <div className="ModalAction">
                        <button
                            className="ModalActionButton"
                            onClick={closeModal}
                        >
                            {t('popup.accept')}
                        </button>
                    </div>
                </div>
            )}
        </Popup>
    );
}

export { PopUpSimple };