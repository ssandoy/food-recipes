import React from "react";
import "./App.scss";
import Spinner from "./components/spinner/Spinner";
import ImageUploader from "./components/image-uploader/image-uploader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Spinner size="lg" />
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
      </header>
      <ImageUploader />
    </div>
  );
}

export default App;
