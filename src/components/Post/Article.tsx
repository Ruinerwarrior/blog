import styled from "styled-components";

interface IProps {
  isMaximized: boolean;
}

const Article = styled.article<IProps>`
  display: grid;
  border: 1px solid lightgray;
  border-radius: 5px;
  grid-template-columns: 2vw 1fr 2vw;
  grid-template-rows: 5vh auto ${props => props.isMaximized ? 'auto' : '30vh' } auto;
`;

export default Article;