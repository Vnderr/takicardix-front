import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';


function Button({ children, ...props }) {
    return <BootstrapButton className="custom-button btn-grow" {...props}>{children}</BootstrapButton>;
}


export default Button;