import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CardClima from "./CardClima";

const Formulario = ({ kelvin_to_celsius }) => {
    const [nombreCiudad, setNombreCiudad] = useState("");
    const [nombreCiudadApi, setNombreCiudadApi] = useState("");
    const [latitud, setLatitud] = useState(0);
    const [longitud, setLongitud] = useState(0);
    const [temperatura, setTemperatura] = useState(0);
    useEffect(() => {
        consultaAPI();
        console.log("Ejecute useEffect");
    }, []);

    const consultaAPI = async () => {
        try {
            const peticionAPI = await fetch(
                `http://api.openweathermap.org/geo/1.0/direct?q=${
                    nombreCiudad || "Buenos Aires"
                },arg&limit=1&appid=8088c068d388132744ac36cb925485fe`
            );
            const datos = await peticionAPI.json();
            const latitud = datos[0].lat;
            const longitud = datos[0].lon;
            setLatitud(latitud);
            setLongitud(longitud);
            setNombreCiudadApi(datos[0].name);
        } catch (error) {
            alert("Esa ciudad no existe");
        }
    };

    const consultaAPIClima = async () => {
        try {
            const peticionAPIclima = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=8088c068d388132744ac36cb925485fe`
            );
            const datosClima = await peticionAPIclima.json();
            console.log("CONSULTA API CLIMA");
            let temperatura = datosClima.main.temp;
            temperatura = Math.round(temperatura);
            setTemperatura(kelvin_to_celsius(temperatura));
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        consultaAPI();
        consultaAPIClima();
        setNombreCiudad("");
    };

    const handleInputChange = (value) => {
        const ciudad = value.target.value;
        setNombreCiudad(ciudad);
    };
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ubicacion</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="ej: Buenos Aires"
                        onChange={handleInputChange}
                        value={nombreCiudad}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>

            <div className="mt-5">
                <CardClima
                    temperatura={temperatura}
                    nombreCiudad={nombreCiudadApi}
                ></CardClima>
            </div>
        </>
    );
};

export default Formulario;
