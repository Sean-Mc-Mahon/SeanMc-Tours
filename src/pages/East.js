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
//images
import Glen1 from "../img/glen/glen_1.webp";
import Gap1 from "../img/glen/gap_1.webp";
import Farm1 from "../img/glen/farm_1.webp";
import Kil1 from "../img/glen/kil_1.webp";
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
      <TourWrapper
        variants={TourAnim}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <GlenWrapper>
          <Link className="link" to="/glen">
            <div className="tour-title">
              <h1>Glendalough</h1>
            </div>
          </Link>
        </GlenWrapper>
      </TourWrapper>
      <TourWrapper
        variants={TourAnim1}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <GapWrapper>
          <Link className="link" to="/gap">
            <div className="tour-title">
              <h1>Wicklow Mountains</h1>
            </div>
          </Link>
        </GapWrapper>
      </TourWrapper>
      <TourWrapper
        variants={TourAnim2}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <FarmWrapper>
          <Link className="link" to="/farm">
            <div className="tour-title">
              <h1>Sheepdog Demonstration</h1>
            </div>
          </Link>
        </FarmWrapper>
      </TourWrapper>
      <TourWrapper
        variants={TourAnim3}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <KilWrapper>
          <Link className="link" to="/kil">
            <div className="tour-title">
              <h1>Kilkenny</h1>
            </div>
          </Link>
        </KilWrapper>
      </TourWrapper>
    </motion.div>
  );
};

const TourWrapper = styled(motion.div)`
  height: 22.5vh;
  overflow: hidden;
`;

const GlenWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-image: url(${Glen1});
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

const GapWrapper = styled(GlenWrapper)`
  background-image: url(${Gap1});
`;

const FarmWrapper = styled(GlenWrapper)`
  background-image: url(${Farm1});
`;

const KilWrapper = styled(GlenWrapper)`
  background-image: url(${Kil1});
`;

export default East;
