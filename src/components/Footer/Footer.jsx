import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/images/logo1.png";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { BsEnvelopeHeart } from "react-icons/bs";
import { MdOutlineShareLocation } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import "./footer.css";

const quickLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tour",
    display: "Tours",
  },
];
const quickLinks2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/Login",
    display: "login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="img" />
              <p className="fw-bold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                nisi obcaecati molestias illum temporibus nemo accusantium
                labore iusto!
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    {/* <i class="ri-youtube-line"></i> */}
                    <FiYoutube />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    {/* <i class="ri-github-fill"></i> */}
                    <FaGithub />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    {/* <i class="ri-instagram-line"></i> */}
                    <FaInstagram />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    {/* <i class="ri-facebook-fill"></i> */}
                    <FaFacebookF />
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="fw-bold footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quickLinks.map((item, index) => (
                <ListGroup.Item key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="fw-bold footer__link-title">Quicks Links</h5>
            <ListGroup className="footer__quick-links">
              {quickLinks2.map((item, index) => (
                <ListGroup.Item key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="fw-bold footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
              <ListGroup.Item className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex fw-bold align-items-center gap-2">
                  <span>
                    {/* <i class="ri-map-pin-range-fill"></i> */}
                    <MdOutlineShareLocation />
                  </span>
                  Address:
                </h6>
                <p className="fw-bold mb-0">
                  207 Rich Ave, Bird City, KS 67731, United States
                </p>
              </ListGroup.Item>
              <ListGroup.Item className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 fw-bold d-flex align-items-center gap-2">
                  <span>
                    <BsEnvelopeHeart />
                  </span>
                  Email:
                </h6>
                <p className="fw-bold mb-0">mnmnisrat@gmail.com</p>
              </ListGroup.Item>
              <ListGroup.Item className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex fw-bold align-items-center gap-2">
                  <span>
                    <HiPhone />
                  </span>
                  Phone:
                </h6>
                <p className="mb-0 fw-bold">+123 758 644 55452</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              Copyright {year}, Design & developer By IZMTechz. All rights
              Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
