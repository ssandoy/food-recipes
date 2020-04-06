import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import RecipeUploader from "./components/recipe-uploader/RecipeUploader";
import { NotFoundComponent } from "./components/not-found/NotFound";
import { Footer } from "./components/footer/Footer";
import { RecipeListContainer } from "./components/recipe-list/RecipeListContainer";

import logo from "./logo.svg";
import "./App.scss";


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="app-container">
          <Switch>
            <Route exact path={["/", "/oppskrifter"]} component={RecipeListContainer} />
            <Route exact path={"/registrer"} component={RecipeUploader} />
            <Route component={NotFoundComponent} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
