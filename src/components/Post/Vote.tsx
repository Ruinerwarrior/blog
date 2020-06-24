import * as React from "react";

import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import VoteContainer from "./VoteContainer";
import VoteCount from "./VoteCount";
import VoteIcon from "./VoteIcon";

interface IProps {
  nrOfVotes: number;
  changeVote: (isVote: boolean) => void;
}

const Vote: React.FunctionComponent<IProps> = ({ changeVote, nrOfVotes = 0 }) => {
  const [votes, setVote] = React.useState(nrOfVotes);
  const [isVote, setIsVote] = React.useState(false);

  const onVoteChange = () => {
    if(isVote)
      setVote(votes - 1);
    else  
      setVote(votes + 1);

    changeVote(!isVote);
    setIsVote(!isVote);
  }

  return(
    <VoteContainer>
      <VoteCount>{votes}</VoteCount>
      <VoteIcon icon={faThumbsUp} onClick={onVoteChange} color={isVote ? "#007BFB" : "black"}/>
    </VoteContainer>
  )
}

export default Vote;