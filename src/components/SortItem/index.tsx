import * as React from "react";

import { FilterState } from "../PostsWrapper"
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Button from "./Button";
import Icon, { EmptyIcon } from "./Icon";

interface IProps {
  title: string;
  isSelected: boolean;
  setFilter: (selected: string, filterState: FilterState) => void;
}

const SortItem: React.FunctionComponent<IProps> = ({ title, isSelected, setFilter }) => {

  const [filterState, setFilterState] = React.useState(FilterState.None);
  const [clickCount, setClickCount] = React.useState(0);

  let icon = <EmptyIcon></EmptyIcon>;

  React.useEffect(() => {

    if(isSelected && clickCount === 0)
      setClickCount(1);

    if (clickCount === 0)
      setFilterState(FilterState.None);
    else if (clickCount === 1)
      setFilterState(FilterState.DESC);
    else
      setFilterState(FilterState.ASC);

    if (!isSelected) {
      setFilterState(FilterState.None);
      setClickCount(0);
    }
      

  }, [clickCount, isSelected]);


  if (filterState === FilterState.ASC)
    icon = <Icon icon={faAngleUp}/>;
  else if (filterState === FilterState.DESC)
    icon = <Icon icon={faAngleDown}/>;
  else
    icon = <EmptyIcon></EmptyIcon>;

  return (
    <Button
      onClick={() => { setClickCount(clickCount < 2 ? clickCount + 1 : 0); setFilter(title, filterState)}}
    >
      {icon}
      <h4>{title}</h4>
    </Button>
  );
}

export default SortItem;