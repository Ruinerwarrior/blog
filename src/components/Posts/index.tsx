import * as React from "react";

import { PostsContext } from "../PostsWrapper";
import Post from "../Post"
import List from "./List";

const Posts: React.FunctionComponent = () => {
  const { posts } = React.useContext(PostsContext);

  return (
    <List>
      {
        posts.map((b, i) => <Post key={b.title + i} {...b} />)
      }
      {
        posts.length === 0 &&
        "No posts found on this subject"
      }
    </List>
  )
}

export default Posts;