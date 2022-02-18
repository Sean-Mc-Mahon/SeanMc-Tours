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
import Galway1 from "../img/cliffs/gal_1.webp";
import Galway2 from "../img/cliffs/gal_2.webp";
import Galway3 from "../img/cliffs/gal_3.webp";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Galway = () => {
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
                <img className="location-image" src={Galway1} alt="Galway" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Galway2} alt="Galway" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Galway3} alt="Galway" />
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col xl={6} className="description">
            <h2 className="location-name">Galway</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              obcaecati numquam velit a consequatur asperiores, neque non maxime
              vitae odit necessitatibus repellat libero? Iure, enim sunt tempore
              atque impedit quaerat at iste esse molestiae perspiciatis odio
              molestias voluptatibus quod! Dicta officiis commodi quia quas
              nesciunt veritatis accusamus, quam laborum voluptates.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              aspernatur amet distinctio magnam quae maxime, non optio
              repellendus fugit delectus provident aperiam animi pariatur
              commodi rem eum assumenda a voluptate blanditiis! Sed illo
              voluptatum aut illum aliquam nobis quidem accusantium!
            </p>
            <p className="quote">
              <i>
                <strong>
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque error accusamus quia quae ab nobis a modi at
                  exercitationem nulla. "
                </strong>
              </i>
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Galway;
