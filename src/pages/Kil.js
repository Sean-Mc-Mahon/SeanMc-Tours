import React from "react";
//styled components
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import ScrollTop from "../components/ScrollTop";
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
      <ScrollTop />
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
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Kilkenny Castle</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/bgwashburn/14606146236/in/photolist-ofGjpw-ohJiKi-oiLhYV-FiqLik-akcfiM-akcj1p-akcjgM-21WASHZ-dxkbMu-oAXE1i-oTqYt3-oiRL3Y-oRqCAJ-deJsGz-oAXL1V-KdKRtR-dsTG4x-ohHdZ8-5fRU94-MZEAwL-28kfqsg-dsTNFW-bAvXD6-L26WxR-dxeJHe-ehmcKd-dxkcQJ-23cvf1U-GDPTDq-Qeaisc-95bW3X-2cADQ9v-5NfSPz-qXibiu-dxeFwc-2bAepuq-ay7zSP-2dUPz4b-RRqoXh-TUnKWq-Qea7Qa-2bdNHK5-2bAepR7-2cADYS2-MZExEy-2cTrZZU-ay7zMz-TUnK2j-oFqgqr-294jAUw"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="location-image"
                  src={Kilkenny2}
                  alt="Kilkenny"
                />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>St. Canice's Cathedral</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/infomatique/14394285139/in/photolist-nVYttZ-xiY1oK-YqTZ6u-25fCUkR-23TcsEa-pLf8KJ-H3Gmsu-22w1wbu-hi8QjM-pS8rdU-dyq8KW-MkSwGy-Yt4CnZ-6hc8pj-fvk9Kh-5vZYeT-6hc8nj-qV8s6b-nVYtRb-jeXKWu-rv4cqJ-Tjh7FR-23J5JEx-fCmEza-fHA4cm-fCK1dL-5kRnnR-fCK1fb-fJnLqT-b89nL-pRZ4K9-kov3g-LKHmaw-GXmvoi-TjhcRa-6SNsmc-ac14rw-33KHc5-UxRANx-6T3HrR-774cGG-22PVE63-25xscmU-29vFTtA-aijqFj-fJfqmu-JKfUa-a2YTpi-9Xxyo1-fv5UoD"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="location-image"
                  src={Kilkenny3}
                  alt="Kilkenny"
                />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>St. Canice's Cathedral</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/tomchatt/37026588702/in/photolist-YpUWQo-dWco9t-2y5bhV-fuPKtC-JivmXV-bfBZnZ-JijfD5-2b6FPo5-rybsVD-8wZjw2-c7MbCJ-2fkMU8t-nVYttZ-xiY1oK-YqTZ6u-25fCUkR-23TcsEa-pLf8KJ-H3Gmsu-22w1wbu-hi8QjM-pS8rdU-dyq8KW-MkSwGy-Yt4CnZ-6hc8pj-fvk9Kh-5vZYeT-6hc8nj-qV8s6b-nVYtRb-jeXKWu-rv4cqJ-Tjh7FR-23J5JEx-fCmEza-fHA4cm-fCK1dL-5kRnnR-fCK1fb-fJnLqT-b89nL-pRZ4K9-kov3g-LKHmaw-GXmvoi-TjhcRa-6SNsmc-ac14rw-33KHc5"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
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
