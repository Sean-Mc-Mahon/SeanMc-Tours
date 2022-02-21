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
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Giant's Causeway</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/kloppster/14213693110/"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Cwy2} alt="Causeway" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Giant's Causeway</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/baku79/5083827930/in/photolist-8KeWVG-26n6zNb-8qgyAz-8qhacT-8qkDE9-2hzTwN2-8KeWLC-8qgBMM-8qgpu4-8KbTg8-8qjEVA-8qkuiC-8qjzzE-8qkLVf-8qhtkZ-8qgAoP-JH2c44-8qhebH-8qgdhg-8qg7ND-2kwYxKh-2ktc4gr-8qkxBf-8qguL8-8qjPGG-8qkNzs-8qgWyT-swUB49-8qhri6-8qjvW3-8qhz6n-8qgZZr-8qgUHF-8qgbrX-8qhhRz-8qjUH3-8qjsyE-8qh4D4-8qh6rH-8qgDJR-8qgMUa-8qkFyN-8qhjKF-fP4tBh-8qgfkF-8qkvU5-8qh8wK-8qgRkT-8qji5Q-8qjBbb"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Cwy3} alt="Causeway" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Giant's Causeway</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/smemon/4869129613/in/photolist-8qgyAz-8qhacT-8qkDE9-2hzTwN2-8KeWLC-8qgBMM-8qgpu4-8KbTg8-8qjEVA-8qkuiC-8qjzzE-8qkLVf-8qhtkZ-8qgAoP-JH2c44-8qhebH-8qgdhg-8qg7ND-2kwYxKh-2ktc4gr-8qkxBf-8qguL8-8qjPGG-8qkNzs-8qgWyT-swUB49-8qhri6-8qjvW3-8qhz6n-8qgZZr-8qgUHF-8qgbrX-8qhhRz-8qjUH3-8qjsyE-8qh4D4-8qh6rH-8qgDJR-8qgMUa-8qkFyN-8qhjKF-fP4tBh-8qgfkF-8qkvU5-8qh8wK-8qgRkT-8qji5Q-8qjBbb-8qgH7X-8qgkWX"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
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
