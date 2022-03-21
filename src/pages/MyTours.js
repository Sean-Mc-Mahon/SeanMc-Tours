import React from "react";
//About Section
import AboutSection from "../components/AboutSection";
//styled components
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, TourAnim, TourAnim1, TourAnim2 } from "../animation";
import ScrollTop from "../components/ScrollTop";
//images
import Cliffs1 from "../img/cliffs/cliffs_1.webp";
import Cliffs1s from "../img/cliffs/cliffs_1s.webp";
import Cliffs1m from "../img/cliffs/cliffs_1m.webp";
import Cwy1 from "../img/cwy/cwy_1.webp";
import Cwy1s from "../img/cwy/cwy_1s.webp";
import Cwy1m from "../img/cwy/cwy_1m.webp";
import Glen1 from "../img/glen/glen_1.webp";
import Glen1s from "../img/glen/glen_1s.webp";
import Glen1m from "../img/glen/glen_1m.webp";
//Links
import { Link } from "react-router-dom";

const MyTours = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ScrollTop />
      <TourWrapper
        variants={TourAnim}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <CliffsWrapper className="image-wrapper">
          <Link className="link" to="/west">
            <img
              src={Cliffs1s}
              alt="Cliffs"
              srcSet={`${Cliffs1s} 400w, ${Cliffs1m} 800w, ${Cliffs1} 1200w`}
            />
            <h1>
              Cliffs of Moher
              <br />& Galway
            </h1>
          </Link>
        </CliffsWrapper>
      </TourWrapper>
      <TourWrapper
        variants={TourAnim1}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <CwyWrapper className="image-wrapper">
          <Link className="link" to="/north">
            <img
              src={Cwy1s}
              alt="Causeway"
              srcSet={`${Cwy1s} 400w, ${Cwy1m} 800w, ${Cwy1} 1200w`}
            />
            <h1>
              Giant's Causeway
              <br />& Belfast
            </h1>
          </Link>
        </CwyWrapper>
      </TourWrapper>
      <TourWrapper
        variants={TourAnim2}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <GlenWrapper className="image-wrapper">
          <Link className="link" to="/east">
            <img
              src={Glen1s}
              alt="Glendalough"
              srcSet={`${Glen1s} 400w, ${Glen1m} 800w, ${Glen1} 1200w`}
            />
            <h1>
              Glendalough
              <br />& Kilkenny
            </h1>
          </Link>
        </GlenWrapper>
      </TourWrapper>
      <AboutSection />
    </motion.div>
  );
};

const TourWrapper = styled(motion.div)`
  height: 28vh;
  overflow: hidden;
  @media (min-width: 705px) {
    height: 30vh;
  }
`;

const CliffsWrapper = styled(motion.div)``;

const CwyWrapper = styled(CliffsWrapper)``;

const GlenWrapper = styled(CliffsWrapper)``;

export default MyTours;
