import React from "react";
//styled components
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, TourAnim, TourAnim1, TourAnim2 } from "../animation";
//images
import Cliffs1 from "../img/cliffs/cliffs_1.webp";
import Cwy1 from "../img/cwy/cwy_1.webp";
import Glen1 from "../img/glen/glen_1.webp";
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
      <TourWrapper
        variants={TourAnim}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <CliffsWrapper>
          <Link className="link" to="/west">
            <div className="tour-title">
              <h1>
                Cliffs of Moher
                <br />& Galway
              </h1>
            </div>
          </Link>
        </CliffsWrapper>
      </TourWrapper>
      <TourWrapper
        variants={TourAnim1}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <CwyWrapper>
          <Link className="link" to="/north">
            <div className="tour-title">
              <h1>
                Giant's Causeway
                <br />& Belfast
              </h1>
            </div>
          </Link>
        </CwyWrapper>
      </TourWrapper>
      <TourWrapper
        variants={TourAnim2}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <GlenWrapper>
          <Link className="link" to="/east">
            <div className="tour-title">
              <h1>
                Glendalough
                <br />& Kilkenny
              </h1>
            </div>
          </Link>
        </GlenWrapper>
      </TourWrapper>
    </motion.div>
  );
};

const TourWrapper = styled(motion.div)`
  height: 30vh;
  overflow: hidden;
`;

const CliffsWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-image: url(${Cliffs1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: all 0.5s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
  h1 {
    color: var(--white);
    margin: 0;
  }
`;

const CwyWrapper = styled(CliffsWrapper)`
  background-image: url(${Cwy1});
`;

const GlenWrapper = styled(CliffsWrapper)`
  background-image: url(${Glen1});
`;

export default MyTours;
