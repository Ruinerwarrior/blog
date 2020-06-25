import styled from "styled-components";

const Content = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  grid-template-rows: 1vh auto auto;
  gap: 2vh;
  
  @media(max-width: 500px) {
    grid-template-columns: auto 1fr auto;
    }
`;

export default Content;