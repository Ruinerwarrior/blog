import * as React from "react";

import Page from "./Page";
import Header from "./components/Header";
import PostsHeader from "./components/PostsHeader";
import Posts from "./components/Posts";
import PostsWrapper from "./components/PostsWrapper";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Content from "./components/Content";

const App: React.FunctionComponent = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Route path="/">
      <PostsWrapper>
        <Page>
          <Header />
          <Content>
            <PostsHeader />
            <Posts />
          </Content>
        </Page>
      </PostsWrapper>
    </Route>
  </Router>

);

export default App;
