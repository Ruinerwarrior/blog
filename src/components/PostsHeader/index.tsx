import * as React from "react";

import { FilterState } from "../PostsWrapper"
import SortItem from "../SortItem";
import Header from "./Header";

const PostsHeader: React.FunctionComponent = () => {
  const [selected, setSelected] = React.useState("");

  const setFilter = (title: string, filterState: FilterState) => {
    setSelected(title);
  }
    
  return (
    <Header>
      <SortItem title={"Date"} setFilter={setFilter} isSelected={selected === "Date"} />
      <SortItem title={"Popularity"} setFilter={setFilter} isSelected={selected === "Popularity"} />
    </Header>
  )
}

export default PostsHeader;
