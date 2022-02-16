import React from "react";
//styled components
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
// Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//images
import Cliffs1 from "../img/cliffs/cliffs_1.webp";
import Cliffs2 from "../img/cliffs/cliffs_2.webp";
import Cliffs3 from "../img/cliffs/cliffs_3.webp";

const Cliffs = () => {
  return (
    <CliffPage>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={Cliffs1} alt="Cliffs of Moher" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cliffs2} alt="Cliffs of Moher" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cliffs3} alt="Cliffs of Moher" />
        </SwiperSlide>
      </Swiper>
    </CliffPage>
  );
};

const CliffPage = styled(motion.div)`
  img {
    height: 90vh;
  }
`;

export default Cliffs;
