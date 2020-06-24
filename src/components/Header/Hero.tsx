import styled from "styled-components";

import img from "../../images/background.jpg";

const Hero = styled.section`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  background-image: url(${img});
  background-position: 0% 50%;
  background-size: cover;
  -webkit-box-shadow: 0px 3px 20px -5px rgba(0,0,0,0.36);
  -moz-box-shadow: 0px 3px 20px -5px rgba(0,0,0,0.36);
  box-shadow: 0px 3px 20px -5px rgba(0,0,0,0.36);
  color: white;
  align-items: end;
`;

export default Hero;