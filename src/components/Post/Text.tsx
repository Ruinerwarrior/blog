import styled from "styled-components";

const Text = styled.div`
  grid-column: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  overflow-y: hidden;
  
  pre {
    border-radius: 5px;
    padding: 1em;
    background-color: #EFF0F1;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  img {
    max-width: 100%
  }
`;

export default Text;