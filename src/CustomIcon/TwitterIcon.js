import React from 'react';
import { CustomIcon } from './';
import "./CustomIcon.css";

function TwitterIcon({ onClick }) {
    return (
        <CustomIcon 
            type="twitter"
            onClick={onClick}
            color="#1264BD"
        />
    )
}

export { TwitterIcon };