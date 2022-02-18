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
import Kilkenny1 from "../img/glen/kil_1.webp";
import Kilkenny2 from "../img/glen/kil_2.webp";
import Kilkenny3 from "../img/glen/kil_3.webp";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Kilkenny = () => {
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
                  src={Kilkenny1}
                  alt="Kilkenny"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="location-image"
                  src={Kilkenny2}
                  alt="Kilkenny"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="location-image"
                  src={Kilkenny3}
                  alt="Kilkenny"
                />
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col xl={6} className="description">
            <h2 className="location-name">Kilkenny</h2>
            <p>
              The medievel city of Kilkenny began as an ecclesiastic site in the
              6th century and has a number of beutiful churches and a
              roundtower. Kilkenny was chartered as a town in 1207 by the
              Normans and construction of the stone castle began in 1213. In
              1324 Kilkenny was the site of Ireland's first witch trial. It is
              often referred to as the Marble City due to the limestone paving
              taking the appearance of marble on rainy days.
            </p>
            <p>
              Today Kilkenny has a vibrant cultural and sporting scene. It hosts
              a number of festivals including the Cat Laughs comedy festival and
              the Kilkenomics economics festival. It is also home to Cartoon
              Saloon, an animation studio which has been nominated for three
              oscars in the Best Animated Feature category gooing up against
              giants such as Pixar with their movies The Book of Kells, The Song
              of the Sea and The Breadwinner.
            </p>
            <p>
              Kilkenny has the most All Ireland hurling championships of any
              county in Ireland. Hurling is a Gaelic sport similar to field
              hockey but players may raise the ball from the ground and hit it
              through the air, it is the fastest field sport in the world.
            </p>
            <p className="quote">
              <i>
                <strong>
                  "In 1324, Dame Alice De Kyteler and her servant Petronella
                  were suspected of witchcraft after the death of her fourth
                  husband. Dame Kyteler fled to England, Petronella was tortured
                  until she confessed to being a witch and was then flogged and
                  burned."
                </strong>
              </i>
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Kilkenny;
