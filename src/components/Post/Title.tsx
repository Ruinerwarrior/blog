import styled from "styled-components";

const Title = styled.p`
  font-size: 2rem;
  font-weight: 600;
  grid-column: 2;
  grid-row: 2;
  align-self: end;
  justify-self: left;
  margin: 0vh 0 1vh 0;

  @media(max-width: 500px) {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

export default Title;