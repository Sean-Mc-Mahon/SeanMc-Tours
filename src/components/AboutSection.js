import React from "react";
import profile from "../img/seanmc_poly.webp";
//Styled
import styled from "styled-components/macro";
import { About, HomeDescription, HeroImage, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
//Bootstrap
import { Container, Row, Col } from "react-bootstrap";

const aboutSection = () => {
  return (
    <About>
      <Container>
        <Row>
          <Col md={12} lg={6} xl={5}>
            <HeroImage>
              <HideCircular>
                <motion.img
                  variants={photoAnim}
                  initial="hidden"
                  animate="show"
                  src={profile}
                  alt="profile pic"
                />
              </HideCircular>
            </HeroImage>
          </Col>
          <Col md={12} lg={6} xl={7}>
            <HomeDescription>
              <motion.div>
                <Hide>
                  <motion.h2 variants={titleAnim}>
                    want to see the <span>Best</span> of Ireland?
                  </motion.h2>
                </Hide>
                <Hide>
                  <motion.h2 variants={titleAnim}>come with me!</motion.h2>
                </Hide>
                <Hide>
                  <motion.p variants={titleAnim}>
                    I've been a tour guide with Finn McCools Tours since 2019. I
                    love to show people the best of what Ireland has to offer
                    and teach them a thing or two along the way. My tours are a
                    crash course in all things Irish, the history, culture,
                    food, music, sport and anything else you want to know about.{" "}
                  </motion.p>
                </Hide>
              </motion.div>
            </HomeDescription>
          </Col>
        </Row>
      </Container>
    </About>
  );
};
const HideCircular = styled.div`
  overflow: hidden;
  border-radius: 50%;
`;

export default aboutSection;
