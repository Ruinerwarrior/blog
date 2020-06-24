import styled from "styled-components";

const NavBarStart = styled.div`
  display: grid;
  justify-content: left;
  grid-template-columns: 1fr;
  @media(max-width: 500px) {
      justify-items: center;
    }
`;

export default NavBarStart;