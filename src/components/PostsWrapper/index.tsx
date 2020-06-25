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
      const posts = await Api.getAll<{ blogs: Array<IPost> }>(Api.blogsroute);
      setPosts(posts.blogs);
    })();
  }, [])

  React.useEffect(() => {
    if (location.pathname !== "/")
      filterOnLanguage(location.pathname.substr(1));

  }, [location]);

  const filterOnLanguage = async (filter: string) => {

    let filtered = (await Api.getAll<{ blogs: Array<IPost> }>(Api.blogsroute)).blogs;
    filtered = filtered.filter(b => b.language === filter);
    setPosts(filtered);
  }

  const sortOnDate = async (filterState: FilterState) => {
    let sorted = (await Api.getAll<{ blogs: Array<IPost> }>(Api.blogsroute)).blogs;

    if (sorted.length > 0) {
      if (filterState === FilterState.ASC)
        sorted.sort((a, b) => moment(new Date(b.date)).diff(moment(new Date(a.date))));
      else
        sorted.sort((a, b) => moment(new Date(a.date)).diff(moment(new Date(b.date))));


      setPosts(sorted);
    }
  }

  return (
    <PostsContext.Provider value={{ posts, sortOnDate }}>
      {children}
    </PostsContext.Provider>
  )
}

export default PostsWrapper;