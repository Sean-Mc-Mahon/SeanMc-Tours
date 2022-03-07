import React from "react";
import { InfoPages } from "../styles";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";
//Spotify Player Iframe
import Iframe from "react-iframe";
//Animations
import ScrollTop from "../components/ScrollTop";

const MyMusic = () => {
  return (
    <InfoPages>
      <ScrollTop />
      <Container>
        <h2>Modern Irish</h2>
        <Row className="flexRow">
          <Col xl={6} className="flexCol">
            <p>
              Irish music has something for everyone and one of my favourite
              things about doing tours in Ireland is introducing people to my
              favourite Irish music. I always start the morning off with my
              favourite Irish singer songwriters The past few decades have
              produced some really amazing singer songwriters, Cathy Davey, Lisa
              Hannigan and Mick Flannery to name a few. It's mainly acoustic and
              soft at this hour as it is quite early and many people want to
              sleep.
            </p>
            <p>
              Once everyone is a little more awake I'll play some of the more
              internationally known Irish acts such as U2, Sinead O'Connor, The
              Cranberries and Thin Lizzy. A lot of this music comes from the
              80's and 90's, a boom period for Irish musicians internationally.
            </p>
          </Col>
          <Col xl={6} className="flexCol">
            <Iframe
              url="https://open.spotify.com/embed/playlist/31CHpLbvUvWG9G2GwrSoEl?utm_source=generator"
              width="100%"
              id="Spotify"
              className="spotify"
              display="initial"
              position="relative"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </Col>
        </Row>
        <h2>Trad(ish)</h2>
        <Row className="flexRow">
          <Col xl={6} className="flexCol">
            <p>
              Generally on my tours I'll play modern Irish music while we're on
              the motorways and once we reach the country roads I'll play a
              playlist I call Trad(ish), a mix of traditional and folk music.
            </p>
            <p>
              This playlist contains some of my favourite folk acts such as The
              Dubliners and The Pogues and some acts which veer more towards
              rock acts with a celtic feel such as The Saw Doctors.
            </p>

            <p>
              If there are any songs you want to hear while on a tour just let
              me know and I'll gladly play any requests you want to hear.
            </p>
          </Col>
          <Col xl={6} className="flexCol">
            <Iframe
              url="https://open.spotify.com/embed/playlist/3tbtt8F9V4BgTIerl9RPBP?utm_source=generator"
              width="100%"
              id="Spotify"
              className="spotify"
              display="initial"
              position="relative"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </Col>
        </Row>
      </Container>
    </InfoPages>
  );
};

export default MyMusic;
