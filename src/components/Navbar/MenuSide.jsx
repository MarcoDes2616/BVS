import React from 'react';
import { Button, Offcanvas } from 'react-bootstrap';

const MenuSide = ({show, handleClose}) => {
    
    return (
        <Offcanvas placement='end' show={show} onHide={handleClose}>
        <Offcanvas.Header className='close' closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <p>hola</p>
        </Offcanvas.Body>
    </Offcanvas>
    );
};

export default MenuSide;