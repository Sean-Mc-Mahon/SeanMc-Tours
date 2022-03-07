import React from "react";
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
import Glen1 from "../img/glen/glen_1.webp";
import Glen1s from "../img/glen/glen_1s.webp";
import Glen1m from "../img/glen/glen_1m.webp";
import Gap1 from "../img/glen/gap_1.webp";
import Gap1s from "../img/glen/gap_1s.webp";
import Gap1m from "../img/glen/gap_1m.webp";
import Farm1 from "../img/glen/farm_1.webp";
import Kil1 from "../img/glen/kil_1.webp";
import Kil1s from "../img/glen/kil_1s.webp";
import Kil1m from "../img/glen/kil_1m.webp";
//Links
import { Link } from "react-router-dom";

const East = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ScrollTop />
      <TourWrapper
        id="glendalough-wrapper"
        variants={TourAnim}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="image-wrapper">
          <Link className="link" to="/glen">
            <img
              src={Glen1s}
              alt="Glendalough"
              srcSet={`${Glen1s} 400w, ${Glen1m} 800w, ${Glen1} 1200w`}
            />
            <h1>Glendalough</h1>
          </Link>
        </div>
      </TourWrapper>
      <TourWrapper
        id="gap-wrapper"
        variants={TourAnim1}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="image-wrapper">
          <Link className="link" to="/gap">
            <img
              src={Gap1s}
              alt="Gap"
              srcSet={`${Gap1s} 400w, ${Gap1m} 800w, ${Gap1} 1200w`}
            />
            <h1>Wicklow Mountains</h1>
          </Link>
        </div>
      </TourWrapper>
      <TourWrapper
        id="farm-wrapper"
        variants={TourAnim2}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="image-wrapper">
          <Link className="link" to="/farm">
            <img src={Farm1} alt="Farm" />
            <h1>Sheepdog Demonstration</h1>
          </Link>
        </div>
      </TourWrapper>
      <TourWrapper
        id="kilkenny-wrapper"
        variants={TourAnim3}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="image-wrapper">
          <Link className="link" to="/kil">
            <img
              src={Kil1s}
              alt="Kilkenny"
              srcSet={`${Kil1s} 400w, ${Kil1m} 800w, ${Kil1} 1200w`}
            />
            <h1>Kilkenny</h1>
          </Link>
        </div>
      </TourWrapper>
    </motion.div>
  );
};

const TourWrapper = styled(motion.div)`
  height: 22.5vh;
  overflow: hidden;
`;

export default East;
