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
import Gap1 from "../img/glen/gap_1.webp";
import Gap2 from "../img/glen/gap_2.webp";
import Gap3 from "../img/glen/gap_3.webp";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Gap = () => {
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
                <img className="location-image" src={Gap1} alt="Gap" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Gap2} alt="Gap" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Gap3} alt="Gap" />
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col xl={6} className="description">
            <h2 className="location-name">Wicklow Mountains</h2>
            <p>
              The Wicklow mountains are a popular filming location for movies
              such as 'Braveheart' and 'PS I Love You' as well as the TV show
              'Vikings' which did extensive filming in this area. From here it
              is possible on a clear day to see the Snowdonia mountains in Wales
              across the Irish sea.
            </p>
            <p>
              There are very few trees in this area, this is not uncommon in the
              Irish countryside. In 1900 only 1% of Ireland was covered in
              forest at a time when 33 percent was the European average. The
              British empire made many of their boats as well as manor houses
              from Irish oak. In the 70’s a process of reforestation began with
              aim to reach 18% by 2045, currently the figure is 12%.
            </p>
            <p className="quote">
              <i>
                <strong>
                  "The Wicklow Mountains became a stronghold and hiding place
                  for Irish clans opposed to English rule. Rebel activity died
                  out after the construction of the Wicklow Military Road at the
                  start of the 19th century."
                </strong>
              </i>
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Gap;
