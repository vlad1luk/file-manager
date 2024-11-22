/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import File from "./File.jsx";
import "./App.css";
import './Desktop.css';
import './File.css';


const Desktop = () => {
  const [addFile, setAddFile] = useState(false);
  const handleBtn = () => {
    setAddFile(!addFile);
  };

  return (
    <div className="desktop">
      <div className="desktop-controls">
        <button
          className="control-button"
          onClick={handleBtn}
          disabled={!addFile}
        >
          Cancel
        </button>
        <button
          className="control-button"
          onClick={handleBtn}
          disabled={addFile}
        >
          Create File
        </button>
      </div>
      {addFile && <File />}
    </div>
  );
};


function App() {
  return (
    <div>
      <Desktop />
    </div>
  );
}


export default App;
