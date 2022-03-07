import React from "react";
import { InfoPages } from "../styles";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";
// Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//images
import Breakfast from "../img/other/breakfast.webp";
import Fish from "../img/other/fish.webp";
import Oysters from "../img/other/oysters.webp";
//Animations
import ScrollTop from "../components/ScrollTop";

const Food = () => {
  return (
    <InfoPages>
      <ScrollTop />
      <Container>
        <Row>
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
                  src={Breakfast}
                  alt="Irish Breakfast"
                />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Irish Breakfast</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/nicokaiser/8120298100/in/photolist-dnyDHE-5PBgzv-5MupAt-22BbHU-6MqoBQ-ahoqqA-eUqZbi-o4Fq3-7jFCeP-92JpDB-2mv7kb8-2faXoCY-AzH2J-5SDofd-aEMVtw-jZoen-6T5Xxt-eUCpyw-8BHbtz-qWCtJa-swxbb-JdYeo-bb61Z-5k4xz7-5k4y63-bAffKa-jZoe2-JcZS1g-5BZ2Lm-2jXzH4g-2fbUAf4-3VxTzp-eUqYuH-bnSw7i-arwG4s-2mPMqhq-2k9oCBx-gZvrXf-2mQV2NH-2m5MdWL-7JyVao-NPzq35-5Rj3iw-NrpqUf-8PGzZi-4LuuXu-pZPxKY-2fbUAQT-deJdik-61ZPdC"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="location-image"
                  src={Fish}
                  alt="Fish and Chips"
                />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Fish and Chips</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/arvin_benitez/49116048137/in/photolist-2hQdzWa-2gAusjf-25o9ftR-KcSmNR-eFxaKc-26FQpVd-7R4W6V-2mwsZNo-2gJUx3P-bfJwDH-2i2mBrJ-G6azwM-7aPn57-571XF5-2mmTW1o-2mZvQ6a-2i2qgWN-2kvKAKD-2gwvneC-2i2pPPC-2i2mdNn-2i2oAgS-yp5M4V-2hR53gh-2gAv8Ka-2kNztzP-29F7B8X-2jU2kbb-2i2oYkb-2mZswKx-2i2mpMX-53cVGn-ULaDTP-2jcFt9R-Meef4f-2kyuw1a-2kTQ4pb-PRZYAS-pF6B6o-Q8oFMq-2kMn8ND-2gH7TGb-raxxAh-27znz6w-2kbkwRh-bpuuEH-cWxUSf-cWxTKQ-oK9CX7-bD2R9G"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="location-image"
                  src={Oysters}
                  alt="Guinness and Oysters"
                />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Guinness and Oysters</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/atome6197/2870912414/in/photolist-5nGbeU-oZdsZ-oZdtr-34anmz-34apAe-34eW2Q-34eWy5-34am8B-34eUKY-Z8PBGQ-HoKsti-34avyM-34eVMo-34anTK-34eYQw-34f3Dh-34avbn-34f2C3-34eZFJ-bSK9i-34f1C7-34f3oE-bSK8A-34f4KJ-34f3U1-34areT-34asZe-34f57y-34aupt-34f2fh-FufznF-34aqCR-8qaQ81-8ziozb-5dqd9j-aSL3wH-8GC17s-5SPgkU-8ziBe9-7n6QQK-8zfteD-8ziBoq-8ziBg9-8ziBmG-8zitUN-aCHCRh-8zft1R-8zft8t-8ziyW1-8ziyR9"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col>
            <h2>Food</h2>
            <p>
              Irish food is best described as rustic, farmhouse style cooking.
              Ireland does not have the same culinary reputation as other
              European countries such as France or Italy but we produce meat,
              produce and dairy products of exceptional quality. Mass farming is
              not prevalent in Ireland, our animals are generally free to graze
              on the lush green grass which grows year round.
            </p>
            <p>
              One of the things I miss most about Irish food while abroad is
              Irish breakfast. It usually consists of sausage, bacon, egg and
              balck and white pudding, served with toast and tea or coffee.
            </p>
            <p>
              Pudding is a form of sausage made from pork, breadcrumbs, oats and
              spices. Black pudding varies from white pudding with the addition
              of blood.
            </p>
            <p>
              Salting and smoking have traditionally been the main methods of
              preserving food in Ireland. Smoked salmon is another example of
              Irish cuisine. While I am not a fan of it myself, as an island
              nation Ireland is known for it's seafood. Oysters and Guinness are
              said to make for a particulary good combination while fish and
              chips are always popular too.
            </p>
            <p>
              I'm often asked where to get Irish Stew and Shepard's Pie, it's
              tricky to answer as they are mostly associated with home cooking.
              While you will find these dishes around Dublin they are mainly
              served in the pubs around temple bar which usually cater towards
              tourists and can be over priced.
            </p>
          </Col>
        </Row>
      </Container>
    </InfoPages>
  );
};

export default Food;
