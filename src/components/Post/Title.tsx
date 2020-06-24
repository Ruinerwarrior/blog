import styled from "styled-components";

const Title = styled.p`
  font-size: 2rem;
  font-weight: 600;
  grid-column: 2;
  grid-row: 2;
  justify-self: left;

  @media(max-width: 500px) {
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

export default Title;