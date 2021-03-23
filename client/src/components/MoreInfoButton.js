import React from 'react';
import { Button } from 'react-bootstrap';

function MoreInfoButton({link}) {

    return (
        <Button target="_blank" href={link}>
            View Details
        </Button>
    )
}

export default MoreInfoButton;
