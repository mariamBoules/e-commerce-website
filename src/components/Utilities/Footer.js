import React from "react";
import instagram from "../../images/instagram.png";
import phone from "../../images/phone.png";
import twitter from "../../images/twitter.png";
import fb from "../../images/facebook.png";

import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container className="footer font">
        <Row className="d-flex align-items-center justify-content-between py-5 footer-background">
          <Col className="d-flex gap-3">
            <span className="footer-links">Terms and Conditions</span>
            <span className="footer-links">Privacy Policy</span>
            <span className="footer-links">Call us</span>
          </Col>

          <Col className="d-flex gap-3 justify-content-end">
            <div style={{ cursor: "pointer" }}>
              <img src={phone} style={{ width: "20px" }} alt="sm" />
              <span className="footer-phone">011111111111</span>
            </div>

            <div style={{ cursor: "pointer" }}>
              <img src={fb} style={{ width: "20px" }} alt="sm" />
            </div>
            <div style={{ cursor: "pointer" }}>
              <img src={twitter} style={{ width: "20px" }} alt="sm" />
            </div>

            <div style={{ cursor: "pointer" }}>
              <img src={instagram} style={{ width: "20px" }} alt="sm" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
