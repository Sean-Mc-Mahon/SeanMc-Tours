import React from "react";
//styled components
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
//images
import Cliffs1 from "../img/cliffs/cliffs_1.jpg";
import Cwy1 from "../img/cwy/cwy_1.jpg";
import Glen1 from "../img/glen/glen_1.jpg";
//Links
import { Link } from "react-router-dom";

const MyTours = () => {
  return (
    <div>
      <CliffsWrapper>
        <Link className="link" to="/west">
          <div className="tour-title">
            <h1>Cliffs of Moher & Galway</h1>
          </div>
        </Link>
      </CliffsWrapper>
      <CwyWrapper>
        <Link className="link" to="/north">
          <div className="tour-title">
            <h1>Giant's Causeway & Belfast</h1>
          </div>
        </Link>
      </CwyWrapper>
      <GlenWrapper>
        <Link className="link" to="/east">
          <div className="tour-title">
            <h1>Glendalough & Kilkenny</h1>
          </div>
        </Link>
      </GlenWrapper>
    </div>
  );
};

const CliffsWrapper = styled(motion.div)`
  height: 30vh;
  overflow: hidden;
  background-image: url(${Cliffs1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .tour-title {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
