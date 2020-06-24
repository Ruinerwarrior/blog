import styled from "styled-components";

const List = styled.section`
  display: grid;
  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-auto-rows: minmax(30vh, auto);
  gap: 1vh;
`;

export default List;