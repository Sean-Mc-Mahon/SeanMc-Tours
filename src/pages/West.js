import React from "react";

import Iframe from "react-iframe";
//styled components
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  TourAnim,
  TourAnim1,
  TourAnim2,
  TourAnim3,
} from "../animation";
import ScrollTop from "../components/ScrollTop";
//images
import Cliffs2 from "../img/cliffs/cliffs_2.webp";
import Cliffs2s from "../img/cliffs/cliffs_2s.webp";
import Cliffs2m from "../img/cliffs/cliffs_2m.webp";
import Burren1 from "../img/cliffs/burren_1.webp";
import Burren1s from "../img/cliffs/burren_1s.webp";
import Burren1m from "../img/cliffs/burren_1m.webp";
import Kilmac1 from "../img/cliffs/kilmac_1.webp";
import Kilmac1s from "../img/cliffs/kilmac_1s.webp";
import Kilmac1m from "../img/cliffs/kilmac_1m.webp";
import Gal1 from "../img/cliffs/gal_1.webp";
import Gal1s from "../img/cliffs/gal_1s.webp";
import Gal1m from "../img/cliffs/gal_1m.webp";
import Wild from "../img/cliffs/wild1.jpg";
//Links
import { Link } from "react-router-dom";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";

const West = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ScrollTop />
      <TourWrapper
        id="moher-wrapper"
        variants={TourAnim}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="image-wrapper">
          <Link className="link" to="/cliffs">
            <img
              src={Cliffs2s}
              alt="Cliffs"
              srcSet={`${Cliffs2s} 400w, ${Cliffs2m} 800w, ${Cliffs2} 1200w`}
            />
            <h1>Cliffs of Moher</h1>
          </Link>
        </div>
      </TourWrapper>
      <TourWrapper
        id="burren-wrapper"
        variants={TourAnim1}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="image-wrapper">
          <Link className="link" to="/burren">
            <img
              src={Burren1s}
              alt="Burren"
              srcSet={`${Burren1s} 400w, ${Burren1m} 800w, ${Burren1} 1200w`}
            />
            <h1>The Burren</h1>
          </Link>
        </div>
      </TourWrapper>
      {/* <TourWrapper
        id="kilmacduagh-wrapper"
        variants={TourAnim2}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="image-wrapper">
          <Link className="link" to="/kilmac">
            <img
              src={Kilmac1s}
              alt="Kilmacduagh"
              srcSet={`${Kilmac1s} 400w, ${Kilmac1m} 800w, ${Kilmac1} 1200w`}
            />
            <h1>Kilmacduagh</h1>
          </Link>
        </div>
      </TourWrapper> */}

      <TourWrapper
        id="galway-wrapper"
        variants={TourAnim3}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="image-wrapper">
          <Link className="link" to="/gal">
            <img
              src={Gal1s}
              alt="Galway"
              srcSet={`${Gal1s} 400w, ${Gal1m} 800w, ${Gal1} 1200w`}
            />
            <h1>Galway</h1>
          </Link>
        </div>
      </TourWrapper>
      <Container>
        <TourRoute className="tour-route">
          <Row>
            <Col className="info-description">
              <h5 className="green">Departure</h5>
              <p>
                <strong>7:00am</strong> at The Starbucks Cafe on Dame Street / 1
                College Green
                <br />
                <strong>7:05am</strong> at Dublin Bus Office, 59 O’Connell
                Street, Dublin 1
              </p>
              <h5 className="green">To the Cliffs...</h5>
              <p>
                Our first stop is a service station named in honour of Barack
                Obama due to his great grandfather emigrating from the
                neighbouring village of Moneygall in 1851. Obama visited the
                village in 2016 to meet distant relatives and enjoyed a pint of
                Guinness with Michelle in the local pub while there.
              </p>
              <p>
                After a quick pit stop at the service station we continue to the
                cliffs passing Bunratty Castle along the way. Originally a
                viking camp it was first made a timber fortress under the Anglo
                Norman lord Robert DeMuscegros in 1251. The current stone
                fortress was built by the MacNamara family in 1425.
              </p>
              <p>
                Our first stop is at The Cliffs of Moher where you will have
                plenty time to explore at your leasure. There are cafes, toilet
                facilities, shops and an information center at the visitor
                center.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xl={6} className="image">
              <Iframe
                url="https://www.youtube.com/embed/5206QjFWmAk"
                width="300"
                height="auto"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
              />
            </Col>
            <Col xl={6} className="info-description">
              <h5 className="green">After the Cliffs...</h5>
            </Col>
          </Row>
          <Row>
            <p>
              From the cliffs we will continue along the wild atlantic way
              passing the Aran Islands before driving through the desolate but
              beautiful{" "}
              <Link className="green" to="/burren">
                <strong>Burren</strong>
              </Link>
              . We then continue along this coastal route and the views get
              better and better as we go. Along the way we pass Ballyvaughn and
              Kinvarra, two fishing villages each with exceptional thatch roof
              architecture.
            </p>
          </Row>
          <Row>
            <Col xl={6} className="image">
              <img src={Wild} alt="Wild Atlantic Way" />
              <div className="photo-description">
                <div className="photo-title">
                  <em>Wild Atlantic Way</em>
                </div>
                <div className="photo-link">Source: Author's Own</div>
              </div>
            </Col>
            <Col>
              <p>
                After the Burren we continue to{" "}
                <Link className="green" to="/gal">
                  <strong>Galway</strong>
                </Link>{" "}
                where you will be able to explore the city at your own place.
                Galway is a beautiful city with lots of great pubs, restaurants,
                walking routes and street musicians.
              </p>
              <h5 className="green">Back to Dublin</h5>
              <p>
                Once we're all back on board after Galway we will drive coast to
                coast back to Dublin, getting you back to Dublin, dropping you
                off at Cleary’s Store on O’Connell Street.
              </p>
            </Col>
          </Row>
        </TourRoute>
      </Container>
    </motion.div>
  );
};

const TourWrapper = styled(motion.div)`
  height: 30vh;
  overflow: hidden;
`;
const TourRoute = styled(motion.div)`
  text-align: center;
  margin-top: 0.5rem;
  .tour-route {
    text-align: center;
  }
`;

export default West;
