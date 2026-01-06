// App.jsx
import React from "react";
import Home from "./Components/Home";
import InputForm from "./Components/InputForm";
import PreviewSlides from "./Components/PreviewSlides";
import DownloadButton from "./Components/DownloadButton";
import History from "./Components/History";

function App() {
  return (
    <div className="min-h-screen p-6 bg-gray-100 font-sans">
      <Home />
      <InputForm />
      <PreviewSlides />
      <DownloadButton />
      <History />
    </div>
  );
}

export default App;