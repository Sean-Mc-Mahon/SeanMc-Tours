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
import Dun1 from "../img/cwy/dun_1.webp";
import Cwy1 from "../img/cwy/cwy_1.webp";
import Dark1 from "../img/cwy/dark_1.webp";
import Bel1 from "../img/cwy/bel_1.webp";
//Links
import { Link } from "react-router-dom";

const North = () => {
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
        <DunWrapper>
          <Link className="link" to="/dun">
            <div className="tour-title">
              <h1>Dunluce Castle</h1>
            </div>
          </Link>
        </DunWrapper>
      </TourWrapper>
      <TourWrapper
        variants={TourAnim1}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <CwyWrapper>
          <Link className="link" to="/cwy">
            <div className="tour-title">
              <h1>Giant's Causeway</h1>
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
        <DarkWrapper>
          <Link className="link" to="/dark">
            <div className="tour-title">
              <h1>Dark Hedges</h1>
            </div>
          </Link>
        </DarkWrapper>
      </TourWrapper>
      <TourWrapper
        variants={TourAnim3}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <BelWrapper>
          <Link className="link" to="/bel">
            <div className="tour-title">
              <h1>Belfast</h1>
            </div>
          </Link>
        </BelWrapper>
      </TourWrapper>
    </motion.div>
  );
};

const TourWrapper = styled(motion.div)`
  height: 22.5vh;
  overflow: hidden;
`;

const DunWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-image: url(${Dun1});
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

const CwyWrapper = styled(DunWrapper)`
  background-image: url(${Cwy1});
`;

const DarkWrapper = styled(DunWrapper)`
  background-image: url(${Dark1});
`;

const BelWrapper = styled(DunWrapper)`
  background-image: url(${Bel1});
`;

export default North;
