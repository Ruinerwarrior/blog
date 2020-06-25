import * as React from "react";

import { FilterState, PostsContext } from "../PostsWrapper"
import SortItem from "../SortItem";
import Header from "./Header";

const PostsHeader: React.FunctionComponent = () => {
  const [selected, setSelected] = React.useState("Date");
  const {sortOnDate} = React.useContext(PostsContext);
  const setFilter = (title: string, filterState: FilterState) => {
    setSelected(title);
    sortOnDate(filterState);
  }
    
  return (
    <Header>
      <SortItem title={"Date"} setFilter={setFilter} isSelected={selected === "Date"} />
    </Header>
  )
}

export default PostsHeader;
