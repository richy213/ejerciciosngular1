// App.jsx
import React, { useState } from 'react';
import Formulario from './Formulario';
import CalculoSerie from './CalculoSerie';
import {Badge,Form} from 'reactstrap';
const App = () => {
    const [resultado, setResultado] = useState(null);

    const handleCalculo = (numero) => {
        setResultado(numero);
    };

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Calculadora SNGULAR</h1>
            <Formulario onSubmit={handleCalculo} />
            {resultado && <CalculoSerie n={resultado} />}
        </div>
    );
};

export default App;
