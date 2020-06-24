import styled from "styled-components";

const Header = styled.nav`
  display: grid;
  grid-column: 2;
  grid-row-start: 2;
  grid-row-end: 3;

  grid-template-columns: auto auto 1fr;
  justify-items: left;

  gap: 5%;
`;

export default Header;