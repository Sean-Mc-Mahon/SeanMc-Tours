import React from "react";
import { InfoPages } from "../styles";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";
//images
import Bridge from "../img/dublin/bridge.webp";
import Hapenny from "../img/dublin/hapenny.webp";
import Longroom from "../img/dublin/grafton/longroom.jpg";
import Grafton from "../img/dublin/grafton/grafton.jpg";
import Green from "../img/dublin/grafton/green.jpg";
import Trinity from "../img/dublin/grafton/trinity.jpg";
import Park from "../img/dublin/phoenix.webp";
import Temple from "../img/dublin/templebar.webp";
import Tara from "../img/dublin/museum/tara-brooch.jpg";
import Ardagh from "../img/dublin/museum/ardagh-chalice.jpg";
import Collar from "../img/dublin/museum/collar.jpg";
import Fastener from "../img/dublin/museum/fastener.jpg";
import Shrine from "../img/dublin/museum/patricks-shrine.jpg";
import Torc from "../img/dublin/museum/torc.jpg";
import Yeats from "../img/dublin/gallery/yeats.jpg";
import Caravaggio from "../img/dublin/gallery/caravaggio.jpg";
import Gallery1 from "../img/dublin/gallery/gallery1.jpg";
import Gallery2 from "../img/dublin/gallery/gallery2.jpg";
import Monet from "../img/dublin/gallery/monet.jpg";
import Phoenix from "../img/dublin/phoenix/phoenix.jpg";
import Aras from "../img/dublin/phoenix/aras.jpg";
import Cross from "../img/dublin/phoenix/cross.jpg";
import Deer from "../img/dublin/phoenix/deer.jpg";
import Wellington from "../img/dublin/phoenix/wellington.jpg";
import Zoo from "../img/dublin/phoenix/zoo.jpg";
//Animations
import ScrollTop from "../components/ScrollTop";
// Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Dublin = () => {
  return (
    <InfoPages>
      <ScrollTop />
      <Container>
        <h2>Dublin</h2>
        <Row className="dublin-history">
          <Col xl={6} className="image">
            <img src={Bridge} alt="Samuel Beckett Bridge" />
            <div className="photo-description">
              <div className="photo-title">
                <em>Samuel Beckett Bridge</em>
              </div>
              <div className="photo-link">
                Source:
                <a
                  rel="noopener"
                  target={"blank"}
                  href="https://500px.com/photo/97037639/Samuel-Beckett-bridge-at-sunset-Dublin-ireland-by-Giuseppe-Milo/"
                >
                  500px
                </a>
              </div>
            </div>
          </Col>
          <Col xl={6} className="info-description">
            <p>
              With a population of almost 1.5 million people Dublin is by far
              the largest city in Ireland and was originally founded as a viking
              settlement in 841 AD where the river Liffey met the river Poddle
              forming a dark pool. The Gaelic word for dark pool was Dubh Linn
              which would later become anglicised to Dublin as we know it today.
            </p>
          </Col>
        </Row>
        <Row className="dublin-museums">
          <h3 className="green">Museums</h3>
          <Col xl={6} className="image">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="infoSwiper"
            >
              <SwiperSlide>
                <img
                  className="location-image"
                  src={Gallery1}
                  alt="National Gallery"
                />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>National Gallery</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://josephwalshstudio.com/portfolio/magnusmodus/"
                    >
                      Joseph Walsh Studios
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="location-image"
                  src={Gallery2}
                  alt="National Gallery"
                />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>National Gallery</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.theguardian.com/artanddesign/2017/jun/04/national-gallery-of-ireland-dublin-refurbishment-review"
                    >
                      The Guardian
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="location-image"
                  src={Caravaggio}
                  alt="Caravaggio"
                />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Caravaggio</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/The_Taking_of_Christ-Caravaggio_%28c.1602%29.jpg/774px-The_Taking_of_Christ-Caravaggio_%28c.1602%29.jpg"
                    >
                      Wikipedia
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Yeats} alt="Yeats" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Yeats</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://nationalgalleryimages.ie/search/?searchQuery=%22NGI.941%22"
                    >
                      National Gallery
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Monet} alt="Monet" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Monet</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://nationalgalleryimages.ie/search/?searchQuery=%22NGI.852%22"
                    >
                      National Gallery
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col xl={6} className="info-description">
            <p>
              All state run museums are free to enter and many of them are
              clustered together near Merrion Square. The{" "}
              <a href="https://www.nationalgallery.ie/">National Gallery </a>
              contains amazing international artworks by Caravaggio, Monet,
              Picasso, Renoir as well as Irish artists such as Jack Butler
              Yeats, brother of the poet William Butler Yeats.
            </p>
          </Col>
          <Col xl={6} className="image">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="infoSwiper"
            >
              {/* <SwiperSlide>
                <img className="location-image" src={Torc} alt="Torc" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Golden Torc</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.museum.ie/en-IE/Collections-Research/Collection/The-Treasury"
                    >
                      National Museum
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Fastener} alt="Fastener" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Golden Fastener</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.museum.ie/en-IE/Collections-Research/Collection/The-Treasury"
                    >
                      National Museum
                    </a>
                  </div>
                </div>
              </SwiperSlide> */}
              <SwiperSlide>
                <img className="location-image" src={Collar} alt="Collar" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Golden Collar</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.museum.ie/en-IE/Collections-Research/Collection/The-Treasury"
                    >
                      National Museum
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Tara} alt="Tara Brooch" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Tara Brooch</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.museum.ie/en-IE/Collections-Research/Collection/The-Treasury"
                    >
                      National Museum
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="location-image"
                  src={Ardagh}
                  alt="Ardagh Chalice"
                />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Ardagh Chalice</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.museum.ie/en-IE/Collections-Research/Collection/The-Treasury"
                    >
                      National Museum
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="location-image"
                  src={Shrine}
                  alt="Patricks Shrine"
                />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Patrick's Bell Shrine</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.museum.ie/en-IE/Collections-Research/Collection/The-Treasury"
                    >
                      National Museum
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col xl={6} className="info-description">
            <p>
              The{" "}
              <a href="https://www.museum.ie/en-IE/Museums/Archaeology">
                National Museum
              </a>{" "}
              contains the most stunning archaeological artifacts from
              throughout Ireland's history from the prehistoric age through the
              arrival of the Celts, Christians, Vikings and Anglo Normans. It's
              really amazing to see the evolution of Irish culture infront of
              your eyes. Much of the content of my tours I learned from visits
              to this museum.
            </p>
          </Col>
        </Row>
        <Row className="dublin-temple">
          <h3 className="green">Temple Bar</h3>
          <Col xl={6} className="image">
            <img src={Temple} alt="Temple Bar" />
            <div className="photo-description">
              <div className="photo-title">
                <em>Temple Bar</em>
              </div>
              <div className="photo-link">
                Source:
                <a
                  rel="noopener"
                  target={"blank"}
                  href="https://www.flickr.com/photos/calleephoto/38418581245/in/photolist-21wVgHP-81GSQw-2m8s9N5-2jnLsEi-eg9ojH-2kjEkRg-xhkpc-iRh223-xhmgn-4MazuD-MF8tGM-xhmbN-b8ERc-xhkjq-nNZxMA-22iawv7-2mHhqcL-652fpz-HnwWn-21EgDK2-pxzdwC-FkNuA-9F4HTm-64y1Gt-CKdFo8-2m8cWeQ-64y2wg-pjt8sU-7dyeHJ-LR6yBa-NhA7QY-cAtmPU-77KiqZ-ayxEoX-K9YNSc-7R9d9z-56eQgi-Mmv44Y-9rJPL6-ayxGsF-mAFgGo-q9JxeL-f62aEt-MnSX7v-2mo1uES-687oZK-MCsLpW-5GHXZJ-MF8jNz-2mpaoSM"
                >
                  Flickr
                </a>
              </div>
            </div>
          </Col>
          <Col xl={6} className="info-description">
            <p>
              Temple Bar is the most popular area in Dublin for tourists but be
              warned that it takes advantage of this and is easily the most
              expensive area in Dublin to enjoy a pint. For refernce a pint of
              Guinness around Dublin city center usually costs between €5.50 and
              €6 while in Temple bar it usually costs about €7.
            </p>
            <p>
              'The Temple Bar' pub pictured above is believed by many to be the
              pub the area is named after but this is not the case. The name
              Temple Bar dates back to the 16th century, referencing how the
              land was once a <i>sandbar</i> before being dredged and developed.
              The Temple family owned property in the area and hence the name
              'Temple Bar'.
            </p>
          </Col>
        </Row>
        <Row className="dublin-grafton">
          <h3 className="green">Grafton St - Trinity College</h3>
          <Col xl={6} className="image">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="infoSwiper"
            >
              <SwiperSlide>
                <img
                  className="location-image"
                  src={Grafton}
                  alt="Grafton Street"
                />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Grafton Street</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/124562706@N05/30766178204/in/photolist-NSGGUm-PA8VnY-Gei4of-D5D5jV-ZsTYtn-NSGHLb-aBB1b4-EABCnj-4cGkgt-6cTPp8-7eSbpT-eNp5YU-eNp4SJ-NSGJo3-aBDF2S-2imrYHH-4W1xj2-2imvBjg-85mWcF-2imvBs7-gMVugj-23SiHLx-aUL6qV-248U9vq-2ifxg7u-a7nPmL-gMWxWa-486y3a-NSGHju-ps1cc-EAC1VW-FoSPo-2imrYNc-FoSR7-qsdwvu-4W1xhT-AKymsw-2imvBmf-bspcij-FoSQ9-2imupTG-nm86aC-2hP2Ui8-6pgHKr-7rdESo-b4KRmk-G3y75H-2n4yMUP-DbY2CK-24V2vJA"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="location-image"
                  src={Trinity}
                  alt="Trinity College"
                />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Trinity College</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/40784187@N07/49940046663/in/photolist-2j62MZi-PbdSui-sxdbNM-2dSdQik-2iF7uPK-2kPfSbr-TjjLaG-2i9YLZT-ueRBe6-uraaZo-twsLA9-QmeK8F-HMPb7m-2kPatvw-2efaVVv-2iCjrCT-2iCjrzw-ueHwFy-qTM2HQ-2ivZxE3-2m4MpFW-2iCkRn5-2iCkRoT-2dnFd8z-2amWT2k-2mgpcJp-2k3BS76-2isTNcx-2ejpSWS-2mcvx1a-V47vEJ-27AJgYV-246LMAh-Uj6ooU-2kJ2CZM-QLKDgC-CWoXBc-ueHVbL-2dt62Po-2bTR5xk-2kFAYdG-aUUD3K-2ipeiz1-2dnGQpa-aUUCPM-2eHiLnw-24btoea-SLHmRs-2kHBfCo-2n2PhxK"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="location-image"
                  src={Longroom}
                  alt="Longroom Library"
                />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Longroom Library</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/ojbyrne/37436770830/in/photolist-Z3aeG3-24NPc4Q-4cmF3p-BRGosx-zC5wGj-2iQppxk-2iNioSB-2iQtPNW-2iJnMAC-2iNmaCh-2iNioUk-277Uhfz-JzcYia-tt1Dvs-nPbEKw-tsTcz3-Fk82e9-nRgkhR-nQWxoP-2zZJBc-2zZJUv-24nKRij-u8s9tf-2A575L-2zZJN4-2deeQgF-27887ra-6nwj3R-2iJipXB-2iJnMwV-2iQppDC-2iJiq2E-2iNnSgv-fBTBWn-fC8Pk7-q9aDVx-pbbax1-MnDwDP-MTdQCG-aJfsxi-262TT5N-2hh3DkA-2e1jX1i-kD5gZX-JZg7JS-fBTWRx-2hh3mAi-kD7ex9-kD58jn-HttL2a"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="location-image"
                  src={Green}
                  alt="Stephens Green"
                />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>St. Stephen's Green</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/82955120@N05/8280718022/in/photolist-dBJQYo-2dYJBz9-4LMXH-4LMNs-dyUqwL-RuDCkh-dBDqz6-5BaujU-dyNVTr-t6T5Z-4LMRz-dyNW2Z-Rx5E8n-dyNVzn-RorpfL-dyNVMT-dyUpRj-dyNVDa-QfxFi3-dyNVHc-kDmLEc-t6UBW-24Hq42V-QocnRa-QiWzNS-hgZtr6-aikKSZ-hVBPKY-9sMvGE-dBDrrx-hrjAfx-dzUM7a-Gskn8e-25mwPWa-pyCpiK-267sfng-26EdXrs-dyUpLd-R1ZsUf-RoWvMK-RttQv5-MmFyhs-e2hXq5-LRdCxJ-NDzBX-e2hZES-NDA74-MCDMhq-9sMs7C-f3AaeQ"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col xl={6} className="info-description">
            <p>
              Grafton Street is the main shopping street of Dublin full of Irish
              and international brands. It's also full of music with a great
              standard of buskers.
            </p>
            <p>
              At one end of Grafton Street is Trinity College, Ireland's oldest
              and most prestigious college, founded originally to teach
              exclusively Protestant male students. Today Trinity houses some of
              Ireland's greatest treasures including the{" "}
              <a href="https://www.tcd.ie/visitors/book-of-kells/">
                Book of Kells
              </a>{" "}
              and the{" "}
              <a href="https://dh.tcd.ie/clontarf/The%20Brian%20Boru%20Harp">
                Brian Boru Harp
              </a>
              , the national symbol of Ireland.
            </p>
            <p>
              At the opposite end of Grafton Street is St. Stephen's Green, a
              beutiful refuge from the noise of the city. During the Easter
              Rising of 1916 the British Forces and Irish rebels would cease
              fire once a day to allow the park keeper to{" "}
              <a href="https://www.irishexaminer.com/news/arid-20384116.html">
                feed the ducks
              </a>
              .
            </p>
          </Col>
        </Row>
        <Row className="dublin-phoenix">
          <h3 className="green">Phoenix Park</h3>
          <Col xl={6} className="image">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="infoSwiper"
            >
              <SwiperSlide>
                <img className="location-image" src={Park} alt="Phoenix Park" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Phoenix Park</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/tambako/14899755466/in/photolist-oGD9cC-NDkq1-FWBJif-NDhaQ-NaAcet-MHmW1E-N7uxZ7-N7uA73-oDkFC9-2jy5j8H-btAta7-2iqNv4t-2iqNvbT-2iqR7P5-2fMcwWy-R6smjt-2ijv3sB-2is4KmZ-ehnTiX-2irijrm-zEF88t-2ihHN5v-b3KaSZ-AmcAwJ-3bWj88-2irjtru-78Lojb-nKfCmC-2k1XE33-N7uAX1-2jYhugz-2mxna3s-McRDX2-7pxjKY-MHmVBd-RqgQAw-4gSNP9-McRfSV-McRDut-fhEbu9-McRFsX-mEZWup-pbud1a-55keud-NaAyV4-McRfgV-pKbt9F-RLmeMA-oXatL8-qL6u2T"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="location-image"
                  src={Aras}
                  alt="Aras an Uachtaran"
                />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Aras an Uachtaran</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://commons.wikimedia.org/wiki/File:%C3%81ras_an_Uachtar%C3%A1in-2011.jpg"
                    >
                      Wikipedia
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Cross} alt="Papal Cross" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Papal Cross</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/nvenkatesh/8561015411/in/photolist-e3vrBZ-4Auhhd-G3j6R-sbgn6Y-be1PxM-4nUWRH-ot4mYm-5fcPGh-bjQcnz-f71PJy-or3XL5-obBd8P-NdQhk-4HivCF-iWdyr-dU3riR-ziaWZ-6gPoYW-2mUUkxo-2k6sLf6-2k6tnqn-2mUUXKa-2k67fyN-2kZAk9D-QV6F72-2k67TnD-2mUUkAe-21BjEJY-2ieTcab-dU3rnp-gDr2Mj-dU3rjX-gjyzur-obBdPP-iumUAo-bf3Ct2-8xCCGJ-qZXRHv-7i5msd-NTsrMa-rCurF2-opioNY-4hbsaB-obBdT6-8xCGqL-iWdTR-BzDk3-v9Mn7N-dU2Qbi-iWdHh"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Deer} alt="Deer" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Deer</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://www.flickr.com/photos/alainrouiller/30215132491/in/photolist-N31sdc-N7uu8u-NaAhLF-NaAeCM-NaAd6P-5cedXP-8GH5db-4gNPTa-5ceesx-NaAbik-5civaC-5ciwd3-NaAbJR-5ciuZ5-5ceffr-5civsj-bM9GSe-5cef9z-4gSQ3m-4gNPwX-4gST99-MHmTQs-5civHQ-McTfso-McT1i1-McRqvx-McRiZg-4gNPo2-4gSRpY-4gSR4L-4gSPY3-NaAiJT-N7uGob-5civRo-4gSMDN-4gNJaX-4gNPek-4gSP83-McRjMi-4gNNUX-4gNLKv-4gSQxf-4gSQrU-4gST2S-4gNMoH-N31iYM-4gNN2V-4gNJw6-4gNNPR-4gNNXP"
                    >
                      Flickr
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className="location-image" src={Zoo} alt="Zoo" />
                <div className="photo-description">
                  <div className="photo-title">
                    <em>Dublin Zoo</em>
                  </div>
                  <div className="photo-link">
                    Source:
                    <a
                      rel="noopener"
                      target={"blank"}
                      href="https://en.wikipedia.org/wiki/Dublin_Zoo#/media/File:Dublin_zoo_Orangutang_2011.jpg"
                    >
                      Wikipedia
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col xl={6} className="info-description">
            <p>
              Phoenix Park is the largest enclosed park in Europe. At just over
              7km<sup>2</sup> it is twice the size of Central Park in New York.
              Over 300 wild deer make their home in the park. Some of the
              highlights of the park include the Wellington Memorial, Papal
              Cross, Aras an Uachtaran and Dublin Zoo. You can rent bicycles at
              the entrance to the park, the perimeter is about 10km and takes
              roughly an hour to do a loop. On a sunny day it's the best spot in
              the city!
            </p>
            <p>
              The Duke of Wellington was born and raised in Ireland, although he
              did not like to acknowledge this. The man who defeated Napolean at
              Waterloo regarded Ireland as a <i>'nation of scoundrels'</i>.
              Nevertheless he has a very prominent monument dedicated to him at
              the entrance of Phoenix Park.
            </p>
            <p>
              The Papal Cross was erected as a backdrop for a mass celebrated by
              Pope John Paul II in 1979. The congragation numbered over 1
              million, equal to the population of Dublin at the time. The next
              papal visit to Dublin was undertaken by Pope Francis in 2018, once
              again mass was celabrated at the papal cross although with a
              significantly smaller crowd of 130,000, possibly reflecting
              Ireland's changing religious values.
            </p>
            <p>
              Aras an Uachtaran (President's House) is the home of the Irish
              President. Built in the 18<sup>th</sup> century it was the summer
              residence of the Lord Lieutenant of Ireland prior to Ireland
              achieving independance from Britain in the 20<sup>th</sup>{" "}
              century. Some people claim that the design was an inspiration for
              the White House in Washington D.C (designed by Irish architect
              James Hoban).
            </p>
            <p>
              Dublin Zoo was established in the 19<sup>th</sup> century and
              today houses a vast array of animals including lions, gorillas,
              elephants, sea lions and wolves over 28 hectares.
            </p>
          </Col>
        </Row>
      </Container>
    </InfoPages>
  );
};

export default Dublin;
