import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardClima = ({ temperatura, nombreCiudad}) => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{nombreCiudad}</Card.Title>
                <Card.Text>
                    La temperatura de {nombreCiudad} es: <span>{temperatura}</span>°
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardClima;
