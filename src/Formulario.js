import React, { useState } from 'react';
import {Button,Form,Row,Input,Col} from 'reactstrap';


const Formulario = ({ onSubmit }) => {
    const [numero, setNumero] = useState('');

    const handleChange = (event) => {
        setNumero(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(parseInt(numero));
    };

    return (
        <Form style={{textAlign: "center"}} onSubmit={handleSubmit}>
  <Row className="row-cols-lg-auto g-3 align-items-center">
  <Col>
                <Input  placeholder="Ingresa el Numero" type="number" value={numero} onChange={handleChange} /></Col>
                <Col>             <Button type="submit">Calcular</Button></Col>
         </Row>
        </Form>
    );
};

export default Formulario;
