import styled from "styled-components";

const NavBarItems = styled.div`
    display: grid;
    justify-items: center;
    justify-content: center;
    grid-column: 2;
    grid-template-columns: 1fr 1fr 1fr;
    @media(max-width: 500px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
`;

export default NavBarItems;