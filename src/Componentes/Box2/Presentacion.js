import React from 'react';
import Button from 'react-bootstrap/Button';

const Titular = ()=>{
    return(
        <div className="nombre">
            <h1>Dr. Andres Zafra Muñoz</h1>
            <h3>Odontólogo</h3>
            <h3>Pontificia Universidad Javeriana</h3>
            <Button variant="info">Agenda tu cita</Button>{' '}
        </div>

    )
}

export default Titular;