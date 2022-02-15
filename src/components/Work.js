import React from "react";
//Styled
import styled from "styled-components/macro";
//Animations
import { motion } from "framer-motion";
import { headerAnim, pageAnimation, fade } from "../animation";
import { useScrollForward } from "./useScroll";
import ScrollTop from "./ScrollTop";
// Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Work = () => {
  const [element, controls] = useScrollForward();
  return (
    <MyWork
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
      className="my_work"
    >
      <ScrollTop />
      <WorkSection>
        <HeaderBlock
          variants={headerAnim}
          ref={element}
          animate={controls}
          initial="hidden"
        >
          <motion.h2>
            The most <span>beautiful</span> sites
          </motion.h2>
          <motion.h3>
            in <span>Ireland</span>...
          </motion.h3>
        </HeaderBlock>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <h1>Slide 1</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Slide 2</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Slide 3</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Slide 4</h1>
          </SwiperSlide>
        </Swiper>
      </WorkSection>
      <WorkSection></WorkSection>
    </MyWork>
  );
};
const MyWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding-top: 1rem;
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    background: grey;
    height: 100px;
    text-align: center;
  }
  @media (min-width: 992px) {
    padding: 3rem;
  }
  @media (min-width: 1200px) {
    padding: 5rem;
  }
`;

const WorkSection = styled.div`
  min-height: 90vh;
`;

const HeaderBlock = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 1rem;
  min-height: 20vh;
`;

export default Work;
