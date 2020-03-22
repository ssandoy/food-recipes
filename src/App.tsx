import React from "react";
import "./App.scss";
import ImageUploader from "./components/image-uploader/image-uploader";
import { RECIPE_IMAGEREF_NAME } from "./firebase/storage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<Spinner size="lg" />*/}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
      </header>
      <ImageUploader imageFirebaseRefName={RECIPE_IMAGEREF_NAME} />
    </div>
  );
}

export default App;
