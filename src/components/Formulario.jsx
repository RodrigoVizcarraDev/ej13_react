import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = () => {

    
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ubicacion</Form.Label>
                <Form.Control type="email" placeholder="ej: Buenos Aires" />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Ingrese un pais</Form.Label>
                <Form.Control type="password" placeholder="" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
    );
};

export default Formulario;
