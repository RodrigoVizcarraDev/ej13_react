import "./App.css";
import Formulario from "./components/Formulario";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
    const kelvin_to_celsius = (kelvin) => {
        const celsius = kelvin - 273.15;
        return celsius.toFixed(2);
    };

    return (
        <Container className="mt-5">
            <Formulario kelvin_to_celsius={kelvin_to_celsius}></Formulario>
        </Container>
    );
}

export default App;
