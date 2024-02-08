import React from 'react';
import Serie from './Serie';
import {Badge} from 'reactstrap';

const CalculoSerie = ({ n }) => {
    const serie = new Serie();
    const resultado = serie.terminoN(n);

    return (
        <Badge>
            <p>El término {n} de la serie es: {resultado}</p>
        </Badge>
    );
};

export default CalculoSerie;
