import React from "react";
import styled from "styled-components/macro";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useScrollForward } from "./useScroll";

const Footer = () => {
  const [element, controls] = useScrollForward();
  return (
    <StyledFooter id="foot">
      <Container>
        <Row>
          <Col className="connect">
            <h4>Connect</h4>
            <div className="social">
              <ul>
                <li>
                  <a
                    rel="noopener"
                    target={"blank"}
                    href="https://github.com/Sean-Mc-Mahon"
                  >
                    <i className="devicon-github-original"></i>
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener"
                    target={"blank"}
                    href="https://www.linkedin.com/in/sean-mcmahon-profile/"
                  >
                    <i className="devicon-linkedin-plain"></i>
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener"
                    target={"blank"}
                    href="https://codepen.io/McTastic"
                  >
                    <i className="devicon-codepen-plain"></i>
                  </a>
                </li>
              </ul>
            </div>
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
      justify-content: space-between;
      padding: 0.5rem 0;
      @media (min-width: 768px) {
        padding: 0;
      }
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
  a {
    font-size: 2.2rem;
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
`;

export default Footer;
