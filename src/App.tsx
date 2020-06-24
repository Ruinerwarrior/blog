import * as React from "react";

import Page from "./Page";
import Header from "./components/Header";
import PostsHeader from "./components/PostsHeader";
import Posts from "./components/Posts";
import PostsWrapper from "./components/PostsWrapper";

import { BrowserRouter } from "react-router-dom";
import Content from "./components/Content";

const App: React.FunctionComponent = () => (
  <BrowserRouter>
    <PostsWrapper>
      <Page>
        <Header />
        <Content>
          <PostsHeader />
          <Posts />
        </Content>
      </Page>
    </PostsWrapper>
  </BrowserRouter>

);

export default App;
