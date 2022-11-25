// ** Components
import { Container, Row, Col } from "react-bootstrap";
import { TextDecrypt } from "src/components/TextDecrypt";
import Particle from "../../components/Particle";
import homeLogo from "../../Assets/home-main.svg";
// ** Partials
import Home2 from "./Home2";
import Type from "./Typewriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                <TextDecrypt
                  text={"Hi There! "}
                  style={{ display: "inline" }}
                />
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                <TextDecrypt text={"I'M"} style={{ display: "inline" }} />
                <strong className="main-name">
                  <TextDecrypt
                    text={"Amir Ehsan Haji Hussaini"}
                    style={{ display: "inline" }}
                  />
                </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
