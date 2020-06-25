import * as React from "react";

import * as Api from "../../Api";

import moment from "moment";
import { useLocation } from "react-router-dom";

interface IPost {
  title: string;
  date: string;
  language: string;
  framework: string;
  file: string;
  front: string;
  readTime: number;
  votes: number;
}

interface IPostsContext {
  posts: Array<IPost>;
  sortOnDate: (filterState: FilterState) => void;
  sortOnPopularity: (filterState: FilterState) => void;
};

export enum FilterState {
  ASC,
  DESC,
  None
}

export const PostsContext: React.Context<IPostsContext> = React.createContext({} as IPostsContext);

const PostsWrapper: React.FunctionComponent = ({ children }) => {

  const [posts, setPosts] = React.useState([] as Array<IPost>);
  const location = useLocation();

  React.useEffect(() => {
    (async () => {
      const posts = await Api.getAll<{blogs: Array<IPost>}>(Api.blogsroute);
      console.log("test1", posts);
      setPosts(posts.blogs);
    })();
  }, [])

  React.useEffect(() => {
    if (location.pathname !== "/")
      filterOnLanguage(location.pathname.substr(1));

  }, [location]);

  const filterOnLanguage = async (filter: string) => {

    let filtered = (await Api.getAll<{blogs: Array<IPost>}>(Api.blogsroute)).blogs;
    filtered = filtered.filter(b => b.language === filter);

    console.log("test2");
    setPosts(filtered);
  }

  const sortOnDate = async(filterState: FilterState) => {
    let sorted = (await Api.getAll<{blogs: Array<IPost>}>(Api.blogsroute)).blogs;

    if (filterState === FilterState.ASC)
      sorted.sort((a, b) => moment(a.date).diff(moment(b.date)));
    else
      sorted.sort((a, b) => moment(b.date).diff(moment(a.date)));

    setPosts({ ...sorted });
  }

  const sortOnPopularity = (filterState: FilterState) => {
    let sorted: Array<IPost> = posts;

    if (filterState === FilterState.ASC)
      sorted.sort((a, b) => a.votes - b.votes);
    else
      sorted.sort((a, b) => b.votes - a.votes);

    setPosts(sorted);
  }

  return (
    <PostsContext.Provider value={{ posts, sortOnDate, sortOnPopularity }}>
      {children}
    </PostsContext.Provider>
  )
}

export default PostsWrapper;