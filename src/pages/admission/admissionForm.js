import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AdmissionGuideline from "../../components/admission/AdmissionGuideline.js";
import AdmissionFormSteps from "../../components/admission/admissionForm/index.js";

export default function AdmissionForm() {
  const [showGuidelines, setShowGuidelines] = useState(false);
  const handleToggleGuideline = () => {
    setShowGuidelines(!showGuidelines);
  };
  React.useEffect(() => {
    setShowGuidelines(true);
  }, []);

  return (
    <div className="container">
      {showGuidelines && (
        <AdmissionGuideline
          onToggle={handleToggleGuideline}
          isShow={showGuidelines}
        />
      )}
      <div className="row justify-content-between">
        <div className="col-md-4"></div>
        <div className="col-md-6">
          <AdmissionFormSteps />
        </div>
      </div>
    </div>
  );
}
