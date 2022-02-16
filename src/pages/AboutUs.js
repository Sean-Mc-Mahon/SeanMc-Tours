import React from "react";
//Page Components
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import Work from "../components/Work";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
//styled components
import styled from "styled-components";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ScrollTop />
      <AboutSection>
        <span className="anchor" id="top"></span>
      </AboutSection>
      <WorkContainer>
        <span className="anchor" id="work"></span>
        <Work />
      </WorkContainer>
      <FaqSection />
    </motion.div>
  );
};

const WorkContainer = styled.div`
  background: var(--white);
`;

export default AboutUs;
