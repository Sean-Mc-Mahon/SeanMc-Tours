import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    --yellow: #ffc107;
    --grey: #282828;
    --black: #1b1b1b;
    --green: #047417;
    --white: #f8f9fa;

}

body{
    background: var(--white);
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}
button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid var(--green);
    background: transparent;
    color: var(--black);
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: var(--green);
        color: var(--black);
        -webkit-filter: drop-shadow(0px 0px 5px var(--green));
    filter: drop-shadow(0px 0px 5px var(--green));
    }
}
h1,h2,h3,h4,h5,h6{
    font-family: 'Comfortaa', cursive;
    color: var(--green)
}
h2{
    font-weight: lighter;
    font-size: calc(1.5rem + 2vw)
    }
h3{
    font-size: calc(1.1rem + 2vw)
    }
h4{
    font-weight: bold;
    font-size: 2rem;
    }
a{
    font-size: 1.1rem;
    text-decoration: none;
    }
span{
    font-weight: bold;
    color:var(--green);
    :hover{
        -webkit-filter: drop-shadow(0px 0px 5px var(--green));
        filter: drop-shadow(0px 0px 5px var(--green))}
    }
p{
    padding: 0.5rem 0rem;
    color: var(--black);
    font-size: calc(0.6rem + 1vw);
    line-height: 125%;
    @media (min-width: 992px) {
      font-size: 20px;
    }
    @media (min-width: 1200px) {
      font-size: 22px;
    }
    }
.p-0{
    padding: 0;
}
.location-image{
  width: 100%;
  height: auto;
}
.description{
  text-align: justify;
}
.quote{
  color: var(--green);
  font-family: 'Marcellus', serif;
}
.location-name{
  text-align: center;
}

/* Location Image swiper */
.swiper {
    transition: all 1s;
    padding-bottom: 1rem;
  }

  .swiper-slide {
    width: 100%;
    height: auto;
    @media (min-width: 705px) {
      width: 100%;
      height: 50vh;
      background-position: center center;
      background-repeat: no-repeat;
      overflow: hidden;
      img {
        min-width: 100%;
        min-height: 100%;
      }
    }
    @media (min-width: 1200px) {
      height: 90vh;
      img {
        width: auto;
        max-height: 90vh;
      }
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--green);
    background: var(--white);
    padding: 1.3rem;
    border-radius: 50%;
    top: 50%;
    transition: all 1s;
    @media (min-width: 1200px) {
      padding: 2rem;
    }
  }
  .design-slides .swiper-button-next,
  .design-slides .swiper-button-prev {
    top: 50%;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    transform: scale(0.5);
    @media (min-width: 1200px) {
      transform: scale(1);
    }
  }
  .swiper-button-next:hover::after,
  .swiper-button-prev:hover::after {
    filter: drop-shadow(0px 0px 5px var(--green));
    -webkit-filter: drop-shadow(0px 0px 5px var(--green));
  }
  .design-slides {
    padding-bottom: 2.5rem;
  }
  .swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: 10%;
}
  .swiper-pagination-bullet {
    width: var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,10px));
    height: var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,10px));
    opacity: var(--swiper-pagination-bullet-inactive-opacity, .7);
    transition: all 1s;
  }
  .swiper-pagination-bullet-active {
    background: var(--green);
    border: 0.5px solidvar(--white);
    font-size: 2rem;
    transform: scale(1.7);
  }
`;

export default GlobalStyle;
