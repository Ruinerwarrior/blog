import styled from "styled-components";

const NavBar = styled.nav`
  display: grid;
  background-color: white;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-template-columns: 20% auto 20%;
  border-bottom: 1px solid grey;

  @media(max-width: 500px) {
    grid-column-start: 1;
    grid-column-end: 4;
    }
`;

export default NavBar;