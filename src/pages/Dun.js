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
import Dun1 from "../img/cwy/dun_1.webp";
import Dun2 from "../img/cwy/dun_2.webp";
import Dun3 from "../img/cwy/dun_3.webp";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Dun = () => {
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
                <img className="location-image" src={Dun1} alt="Dunluce" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Dunluce Castle</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/101098779@N08/10087569773/in/photolist-gnpr3M-oDJKTT-EufrRU-NvWdc1-8qqWkp-2cCVyzC-ni1S4S-WeCdw6-e1Gmfy-s8fQMj-CfAqfV-GHZtmJ-asZ2V9-5mYUUJ-8zG9Nt-2eGGd5-2a385U-bMhjP2-dGS5J7-8b58oj-dn6xvp-FPSQLq-bViR1X-geKSqk-9bTeZm-7UK3E6-bsm14f-N927xE-aK4SDP-HVm4ai-xVetuT-JeCFY2-XcfGkj-Voxyi9-Nz8CJ6-2Gkqjr-qrxU6U-25Zn8Q3-8xnf7D-JFxahb-nQZ4Sk-cbhR8f-5A58dF-bRSyYK-citv7L-rNjcxC-hPae3t-dXqzXW-f3L86-5EWmw1"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Dun2} alt="Dunluce" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Dunluce Castle</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/16801915@N06/14866901613/in/photolist-oDJKTT-EufrRU-NvWdc1-8qqWkp-2cCVyzC-ni1S4S-WeCdw6-e1Gmfy-s8fQMj-CfAqfV-GHZtmJ-asZ2V9-5mYUUJ-8zG9Nt-2eGGd5-2a385U-bMhjP2-dGS5J7-8b58oj-dn6xvp-FPSQLq-bViR1X-geKSqk-9bTeZm-7UK3E6-bsm14f-N927xE-aK4SDP-HVm4ai-xVetuT-JeCFY2-XcfGkj-Voxyi9-Nz8CJ6-2Gkqjr-qrxU6U-25Zn8Q3-8xnf7D-JFxahb-nQZ4Sk-cbhR8f-5A58dF-bRSyYK-citv7L-rNjcxC-hPae3t-dXqzXW-f3L86-5EWmw1-c9qPAQ"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Dun3} alt="Dunluce" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Dunluce Castle</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/74979645@N03/6747798457/in/photolist-bhheoH-5eSgqt-9VctaJ-28VEtF9-QznEbJ-avhADn-cN8xb5-sdUx5e-e647Sn-cU9k39-avX4vL-aCqbgY-yzCnwQ-9wTvUq-XPX2p2-c5avtd-6Pjevx-c27baf-cVbVM-i7oaB-EesnhD-p8GwVt-dvqRQA-9SoYBM-n65kmT-GsRUzw-MyS941-5AsjzF-gnpr3M-oDJKTT-EufrRU-NvWdc1-8qqWkp-2cCVyzC-ni1S4S-WeCdw6-e1Gmfy-s8fQMj-CfAqfV-GHZtmJ-asZ2V9-5mYUUJ-8zG9Nt-2eGGd5-2a385U-bMhjP2-dGS5J7-8b58oj-dn6xvp-FPSQLq"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col xl={6} className="description">
            <h2 className="location-name">Dunluce</h2>
            <p>
              Dunluce Castle was built by the McQuillan Clan in the early 16th
              century. It was the inspiration for Castle Greyjoy in 'Game of
              Thrones' as well as Cair Paraval, the castle from CS Lewis'
              'Chronicles of Narnia'. From the castle one can see three
              countries, Northern Ireland, the Republic of Ireland and even
              Scotland. The castle also features on the inner gatefold of Led
              Zeppelins' 'Houses of the Holy'. Just beyond the castle is the
              town of Portrush, famous for it's golf course which hosted the
              Irish Open in 2019.
            </p>
            <p>
              'Dun' is a common prefix in Irish town names, it means fort, any
              town beginning with 'Dun' in Ireland has or once had a fort. Other
              common prefixes include 'Kil' meaning church and 'Bally' from the
              Irish Baile meaning town.
            </p>
            <p className="quote">
              <i>
                <strong>
                  "One night the Lord and Lady of the castle were awaiting their
                  supper when they heard a terrible crash, when they went to
                  investigate they found that their kitchen, along with all
                  their servents, had fallen into the Irish Sea..."
                </strong>
              </i>
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Dun;
