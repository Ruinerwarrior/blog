import styled from "styled-components";

const NavBar = styled.nav`
  display: grid;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  @media(max-width: 500px) {
    grid-column-start: 1;
    grid-column-end: 4;
    }
`;

export default NavBar;