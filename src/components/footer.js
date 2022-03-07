import React from "react";
import styled from "styled-components/macro";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useScrollForward } from "./useScroll";
import ContactUs from "./contactForm";

const Footer = () => {
  const [element, controls] = useScrollForward();
  return (
    <StyledFooter id="foot">
      <Container>
        <Row>
          <Col md={6} className="contact-details">
            <h4>Song Requests</h4>
            <ContactUs />
          </Col>
          <Col md={6} className="connect">
            <h5>10% OFF</h5>
            <p className="promo">
              <strong>
                Use code 'sean10' for 10% any tour with{" "}
                <a
                  rel="noopener"
                  target={"blank"}
                  href="https://www.finnmccoolstours.com/"
                >
                  Finn McCools Tours
                </a>
              </strong>
            </p>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
};

const Hide = styled(motion.div)`
  overflow: hidden;
`;

const StyledFooter = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: row;
  min-height: 10vh;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  background: var(--grey);
  bottom: 0;
  .container {
    color: white;
    .row .col {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .contact-details,
    .connect {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 0;
    }
    .contact-details {
      @media (min-width: 768px) {
        justify-content: start;
        align-items: flex-start;
      }
    }
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    @media (min-width: 992px) {
      font-size: 20px;
    }
    @media (min-width: 1200px) {
      font-size: 22px;
    }
  }
  .social {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    padding: 0 2rem;
    margin: 0;
  }
  li {
    position: relative;
    padding: 0 1rem;
  }
  h5 {
    margin: 0;
  }
  h3,
  a,
  .phone,
  .email,
  .connect h4,
  .contact-details h4 {
    :hover {
      color: var(--green);
      -webkit-filter: drop-shadow(0px 0px 5px var(--green));
      filter: drop-shadow(0px 0px 5px var(--green));
    }
  }
  .promo {
    color: var(--white);
    text-align: center;
    padding: 0 1rem;
    a {
      color: var(--green);
      text-decoration: underline;
    }
  }
`;

export default Footer;
