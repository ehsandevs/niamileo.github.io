import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import social from "src/configs/social";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3 style={{ fontSize: "10px" }}>
            Designed and Developed by Soumyajit Behera (and Customized by me)
          </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {social.github.visible && (
              <li className="social-icons">
                <a
                  href={`https://github.com/${social.github.link}`}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
            )}

            {social.twitter.visible && (
              <li className="social-icons">
                <a
                  href={`https://twitter.com/${social.twitter.link}`}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
            )}

            {social.linkedin.visible && (
              <li className="social-icons">
                <a
                  href={`https://www.linkedin.com/in/${social.linkedin.link}`}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            )}

            {social.instagram.visible && (
              <li className="social-icons">
                <a
                  href={`https://www.instagram.com/${social.instagram.link}`}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            )}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
