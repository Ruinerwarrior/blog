import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const VoteIcon = styled(FontAwesomeIcon)`
  grid-column: 2;
  align-self:center;
  cursor: pointer;
  color: ${props => props.color};
  &:hover {
    color: #007BFB;
  }
`;

export default VoteIcon;