import Carousel from 'react-bootstrap/Carousel';

function Carrousel() {
  return (
    <Carousel>

      <Carousel.Item>
        <img src='banner-1.jpg' className="d-block w-100"></img>
        <Carousel.Caption>
          <h3>RESTAURANTE DE CARNES</h3>
          <h4>Cortes que Cautivan, Sabores que Enamoran.</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src='banner-1.jpg' className="d-block w-100"></img>
        <Carousel.Caption>
          <h3>RESTAURANTE DE CARNES</h3>
          <h4>Donde Cada Bocado es un Viaje a la Tierra de los Sabores Intensos.</h4>
        </Carousel.Caption>
      </Carousel.Item>

      
    </Carousel>
  );
}

export default Carrousel;