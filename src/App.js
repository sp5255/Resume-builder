import React, { useState } from "react";
import ResumeView from "./components/ResumeView";
import ResumeBuilder from "./components/ResumeBuilder";
import "./App.css";

const App = () => {
  const [resumeData, setResumeData] = useState(null);

  const handleSaveResume = (data) => {
    setResumeData(data);
  };

  return (
    <div>
      {resumeData ? (
        <ResumeView {...resumeData} />
      ) : (
        <ResumeBuilder onSave={handleSaveResume} />
      )}
    </div>
  );
};

export default App;
