import GeneralInfo from "./components/GeneralInfo.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import CVPreview from "./components/CVPreview.jsx";

import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>CV Builder</h1>
        <p>Create and customize your CV</p>
      </header>

      <main>
        <section className="forms">
          <GeneralInfo />
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