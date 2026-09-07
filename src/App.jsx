import GeneralInfo from "./components/GeneralInfo.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import CVPreview from "./components/CVPreview.jsx";

import {useState} from "react";
import "./styles/App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phoneNo: "",
  });

  return (
    <div className="app">
      <header>
        <h1>CV Builder</h1>
        <p>Create and customize your CV</p>
      </header>

      <main>
        <section className="forms">
          <GeneralInfo  generalInfo = {generalInfo} setGeneralInfo = {setGeneralInfo}/>
          <Education />
          <Experience />
        </section>

        <section className="preview">
          <CVPreview />
        </section>
      </main>
    </div>
  );
}

export default App;