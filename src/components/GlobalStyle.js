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
    color: #ccc;
    font-size: 1.4rem;
    line-height: 125%;
    }
.p-0{
    padding: 0;
}

.swiper {
    transition: all 1s;
    padding-bottom: 1rem;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--green);
    background: var(--white);
    padding: 1.3rem;
    border-radius: 50%;
    top: 30%;
    transition: all 1s;
    @media (min-width: 567px) {
      top: 40%;
    }
    @media (min-width: 768px) {
      top: 50%;
    }
    @media (min-width: 1200px) {
      padding: 2rem;
    }
  }
  .design-slides .swiper-button-next,
  .design-slides .swiper-button-prev {
    top: 45%;
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
  .swiper-pagination-bullet {
    transition: all 1s;
  }
  .swiper-pagination-bullet-active {
    background: var(--green);
    border: 0.5px solidvar(--white);
    font-size: 2rem;
    transform: scale(2);
  }
`;

export default GlobalStyle;
