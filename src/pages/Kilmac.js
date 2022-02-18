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
import Kilmac1 from "../img/cliffs/kilmac_1.webp";
import Kilmac2 from "../img/cliffs/kilmac_2.webp";
import Kilmac3 from "../img/cliffs/kilmac_3.webp";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Kilmac = () => {
  return (
    <motion.div>
      <Container fluid>
        <Row className="image-description">
          <Col xl={6} className="image">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <img
                  className="location-image"
                  src={Kilmac1}
                  alt="Kilmacduagh"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="location-image"
                  src={Kilmac2}
                  alt="Kilmacduagh"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="location-image"
                  src={Kilmac3}
                  alt="Kilmacduagh"
                />
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col xl={6} className="description">
            <h2 className="location-name">Kilmacduagh</h2>
            <p>
              The monastery was founded in the 7th century as a series of timber
              constructions. The surviving stone buildings were built between
              the 11th and 14th centuries including a church, abbots House and
              one of the best preserved round towers in the country. The
              monastery survived various raids including from vikings and has
              been abondoned since the 15th century. The entrance to the tower
              is 7 meters above the ground to protect the monks from vikings,
              when a monk would see vikings approach they would climb a rope
              ladder into the tower and ring a bell to alert the others who
              would all climb up the ladder and pull it behind them.
            </p>
            <p>
              The monastery is full of celtic crosses, this is a Christian cross
              with a circle around the cross. The Celts were sun worshippers and
              many of their symbols were used by the Christians to make
              Christianity more appealing to them.
            </p>
            <p className="quote">
              <i>
                <strong>
                  "Legend has it that St Coleman McDuagh was wondering around
                  the woods when his belt fell to the ground, he took this as a
                  sign from God to build a monastery."
                </strong>
              </i>
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Kilmac;
