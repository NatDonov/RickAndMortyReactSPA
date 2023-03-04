import "./Home.css";
import rick1 from "../../../Assets/Images/home.png";
import rick2 from "../../../Assets/Images/Rick_and_Morty2.png";
import rick3 from "../../../Assets/Images/Rick_and_Morty3.png";
import Carousel from "react-bootstrap/Carousel";

function Home(): JSX.Element {
  return (
    <div className="Home">
      <img src={rick1} alt="home" />
      {/* <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={rick1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={rick2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={rick3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}

  
    </div>
    
  
  );
}

export default Home;
