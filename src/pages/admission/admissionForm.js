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
    <div className="bg-light ">
      <div className="">
        {showGuidelines && (
          <AdmissionGuideline
            onToggle={handleToggleGuideline}
            isShow={showGuidelines}
          />
        )}

        <AdmissionFormSteps />
      </div>
    </div>
  );
}
