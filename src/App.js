import React from "react";
//ReactRouter
import { Switch, Route } from "react-router-dom";
//Pages
import RuNews from "./pages/RuNews";
import RuNewsCategory from "./pages/RuNewsCategory";
import UsNews from "./pages/UsNews";
import UsNewsCategory from "./pages/UsNewsCategory";
import UaNews from "./pages/UaNews";
import UaNewsCategory from "./pages/UaNewsCategory";
//Components
import NavLang from "./components/NavLang";

function App() {
  return (
    <div className="App">
      <NavLang />
      <Switch>
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
    </div>
  );
}

export default App;
