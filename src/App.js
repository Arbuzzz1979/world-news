import React from "react";
import { useEffect } from "react";
//ReactRouter
import { Route, Switch, useLocation } from "react-router-dom";
//Pages
import RuNews from "./pages/RuNews";
import RuNewsCategory from "./pages/RuNewsCategory";
import UsNews from "./pages/UsNews";
import UsNewsCategory from "./pages/UsNewsCategory";
import UaNews from "./pages/UaNews";
import UaNewsCategory from "./pages/UaNewsCategory";
//Components
import Header from "./layers/Header";
//StyleComponents
import GlobalStyle from "./style/GlobalStyle";
import styled from "styled-components";
//Animation
import {AnimatePresence} from 'framer-motion';
//
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, initLanguage } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  // useEffect(()=>{
  //   dispatch(initLanguage('us'))
  // },[])

  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <Header />
        <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <UsNews />
          </Route>
          <Route path="/us" exact>
            <UsNews />
          </Route>
          <Route path="/us/:id">
            <UsNewsCategory />
          </Route>
          <Route path="/ru" exact>
            <RuNews />
          </Route>
          <Route path="/ru/:id">
            <RuNewsCategory />
          </Route>
          <Route path="/ua" exact>
            <UaNews />
          </Route>
          <Route path="/ua/:id">
            <UaNewsCategory />
          </Route>
        </Switch>
        </AnimatePresence>
      </Container>
    </div>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-rows: min-content 80vh min-content;
  grid-template-columns: [full-start] minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 14rem) [col-end]
    ) [center-end] minmax(6rem, 1fr) [full-end];
`;

export default App;
