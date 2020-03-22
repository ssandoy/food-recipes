import React from "react";
import "./App.scss";
import RecipeImageUploader from "./components/image-uploader/recipe-image-uploader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<Spinner size="lg" />*/}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
      </header>
      <RecipeImageUploader />
    </div>
  );
}

export default App;
