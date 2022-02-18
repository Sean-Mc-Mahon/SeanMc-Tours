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
import Cwy1 from "../img/cwy/cwy_1.webp";
import Cwy2 from "../img/cwy/cwy_2.webp";
import Cwy3 from "../img/cwy/cwy_3.webp";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Cwy = () => {
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
                <img className="location-image" src={Cwy1} alt="Causeway" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Cwy2} alt="Causeway" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Cwy3} alt="Causeway" />
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col xl={6} className="description">
            <h2 className="location-name">Causeway</h2>
            <p>
              The giant's causeway was formed over 50 million years ago by a
              volcanic eruption. The rapidly cooling magma formed around 40,000
              hexagonal basalt columns, similar formations from the same
              eruptions can be seen in Iceland and Scotland. The causeway is
              located just outside the town of Bushmills, the oldest licensed
              distillery in the world, it has been making whiskey since 1608.
            </p>
            <p>
              A more popular explanation for the formation of the causeway is a
              feud between the legendary Irish warrior and Giant Fionn
              MacCumhaill and his Scottish counterpart Benadonner. Fionn spent
              days driving the columns into the sea in order to build a causeway
              to Scotland in order to fight Benadonner. However as Fionn was
              nearing Scotland he discovered that Bennadonner was much larger
              than he had thought and so he fled in fear back to Ireland and his
              wife Oonagh, terrified that Bennadonner would use the causeway to
              come to Ireland to fight him. Luckily Oonagh had a plan, she
              swaddled Fionn like a baby and waited patiently for Bennadonner.
              When the Scottish giant arrived she introduced him to Fionnn's
              baby and now Bennadonner was terrified at the monster that could
              produce such a child. Benadonner fled back to Scotland tearing up
              the stones as he ran, leaving behind only what remains today.
            </p>
            <p className="quote">
              <i>
                <strong>
                  "Fionn MacCumhaill is one of the most famous figures in Irish
                  folklore. As well as creating the Giant's Causeway he is also
                  credited with creating Ireland's largest lake, Lough Neagh, by
                  picking up a ginormous boulder and throwing it at his enemy
                  Benadonner in Scotland, leaving behind a crater that filled
                  with water to become the lake."
                </strong>
              </i>
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Cwy;
