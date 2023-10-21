import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carrousel from './Carrousel';



const Home = () => {
    return (
        <>
            <Carrousel></Carrousel>

            <div className="container">
                <div className="row">
                    <div className="title">
                        Nuestros Servicios
                    </div>
                    <div className="col-md-4">
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="banner-1.jpg" />
                            <Card.Body>
                                <Card.Title>Reservar Mesa</Card.Title>
                                <Card.Text>
                                    Completa el formulario y reserva tu mesa con hora y fecha
                                </Card.Text>
                                <Button variant="primary" href="reservar">Ir Al Servicio</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="banner-1.jpg" />
                            <Card.Body>
                                <Card.Title>Para Llevar</Card.Title>
                                <Card.Text>
                                    Completa el formulario con tus requerimientos y te comunicaremos la disponibilidad
                                </Card.Text>
                                <Button variant="primary" href="contacto">Ir Al Servicio</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="banner-1.jpg" />
                            <Card.Body>
                                <Card.Title>Nuestra Carta</Card.Title>
                                <Card.Text>
                                    Revisa nuestra carta antes de reservar mesa o solicitar para llevar
                                </Card.Text>
                                <Button variant="primary" href="menu">Ir Al Servicio</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;