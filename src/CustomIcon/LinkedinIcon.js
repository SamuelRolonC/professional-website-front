import React from 'react';
import { CustomIcon } from './';

function LinkedinIcon({ onClick }) {
    return (
        <CustomIcon 
            type="linkedin"
            onClick={onClick}
            color="#1264BD"
        />
    )
}

export { LinkedinIcon };