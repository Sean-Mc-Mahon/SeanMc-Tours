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
import Kilmac1 from "../img/cliffs/kilmac_1.webp";
import Kilmac2 from "../img/cliffs/kilmac_2.webp";
import Kilmac3 from "../img/cliffs/kilmac_3.webp";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Kilmac = () => {
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
                  src={Kilmac1}
                  alt="Kilmacduagh"
                />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Kilmacduagh</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/141866597@N06/36005526774/in/photolist-WRFJGo-2jnB17b-EmLxuM-2F39V-SuWN29-5v7ML8-689PWf-4P5cRz-2jnAZvM-4MU4dY-mGKXa-4MTYUs-2DNRTV-R5VUd2-8ANZtK-ahkV8r-53ULnY-VqLvLC-4sTxn6-4sXBQf-Ltti2x-mHwjV-artS93-5qrt2t-j8nyH1-arrcHa-2jnzRuC-mHwe4-mHxx1-mHxAH-mHw84-mHxxY-pbEam-RGG6Sn-mHw9y-mHxqE-6yeE2E-xkwJEB-wFae96-2jnwWyy-xC2Ta4-wFaiXp-BmubX-xzHhmA-2do7SDJ-PGu8JH-2do7QWA-PGu7YK-7strAR-8Dz6tU"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="location-image"
                  src={Kilmac2}
                  alt="Kilmacduagh"
                />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Kilmacduagh</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/jenniferboyer/7172465955/in/photolist-2gzvwUn-2gzv3HB-R1G8na-2gzvq55-4sXBMb-kg5w4-kg5w3-kg5w2-2gzvxDJ-bVNDkV-bVNCRi-bVNH1P-cdb4xh-cdaWCW-bVNLf8-bVNC6p-cdb2XU-cdaW4b-cdaXew-bVNJb4-cdaYSj-bVNHCZ-cdb2iL-bVNFKr-4sXBPj-2i4c7DK-Cz8TYL-nrs7ec-pDa4N2-pCSN3n-cdb5S7-pmEkkG-pmDWGs-pmEH6K-pD84mb-pmD6AF-21QqwYe-2esg77a-2eDtsJw-21Qp9KD-7QgAUU-7QgAUo-7QgAMW-7QgB4s-7QdgEM-7QdgNt-7QdgzK-7QgAYL-7QdgK2-7QdgDc"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="location-image"
                  src={Kilmac3}
                  alt="Kilmacduagh"
                />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Kilmacduagh</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/conall/51625709736/in/photolist-2mDZfTJ-2gzvwUn-R1G8na-2gzvq55-2gzvxDJ-4sTxn6-4sXBQf-2gzv3HB-4sXBMb-kg5w4-kg5w3-kg5w2-bVNDkV-bVNCRi-bVNH1P-cdb4xh-cdaWCW-bVNLf8-bVNC6p-cdb2XU-cdaW4b-cdaXew-bVNJb4-cdaYSj-bVNHCZ-2esg77a-2eDtsJw-21Qp9KD-cdb2iL-bVNFKr-4sXBPj-2i4c7DK-Cz8TYL-nrs7ec-pDa4N2-pCSN3n-cdb5S7-pmEkkG-pmDWGs-pmEH6K-pD84mb-pmD6AF-21QqwYe-7QgAUU-7QgAUo-7QgAMW-7QgB4s-7QdgEM-7QdgNt-7QdgzK"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
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
