import React from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import Papa from "papaparse";

export default function Upload({
  onClose,
  setData,
  data,
  setStage,
  nbMessage,
}) {
  const [file, setFile] = React.useState("");
  const allowedExtension = ["csv"];
  const handleChange = (e) => {
    const incomingFile = e.target.files[0];

    const fileExtension =
      incomingFile.name.split(".")[incomingFile.name.split(".").length - 1];

    if (!allowedExtension.includes(fileExtension)) {
      toast.error("Please upload CSV file");
    } else {
      setFile(incomingFile);
      Papa.parse(incomingFile, {
        complete: function (results) {
          setData(results.data);
          console.log(results.data);
          setStage(2);
        },
      });
    }
  };
  return (
    <div>
      <div>
        <div>
          <h5>Don't have the template? Click Here* </h5>
          <button>Download Template</button>
        </div>
        <div>
          <small className="text-danger w-75">{nbMessage}</small>
        </div>
      </div>
      <div className="upload-area position-relative">
        <input
          type="file"
          className="position-absolute h-100 w-100 opacity-0"
          onChange={handleChange}
          accept=".csv"
          style={{ cursor: "pointer", left: 0, right: 0 }}
        />
        <h5>Select a CSV file to upload</h5>

        <p className="text-muted">or drag and drop it here</p>
        <small>{file.name}</small>
      </div>
    </div>
  );
}
