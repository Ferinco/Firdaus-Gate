import React from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import Papa from "papaparse";
import { Icon } from "@iconify/react";

export default function Upload({ onClose, setData, data, setStage }) {
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
    <Wrapper className="d-flex flex-column justify-content-between">
<div>
  <div className="d-flex flex-row justify-content-center align-items-center gap-3 flex-wrap">

  <p className="m-0 intro">Don't have the template? Click Here* </p>
  <button className="download-btn">Download Template</button>
  </div>
  <div><small>Make sure you are using</small></div>
</div>
    <div className="upload-area position-relative d-flex flex-column justify-content-center align-items-center gap-2">
      <input
        type="file"
        className="position-absolute h-100 w-100 opacity-0"
        onChange={handleChange}
        accept=".csv"
        style={{ cursor: "pointer", left: 0, right: 0 }}
        />
        <Icon className="icon" icon="fa6-solid:cloud-arrow-up" />
      <p className="text-muted"> Drag file here or browse for file.</p>
      <small>{file.name}</small>
        </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
height: 100%;
.upload-area{
  height: 270px;
}
.icon{
  font-size: 60px !important;
}
.intro{
  font-size: 20px;
}
.download-btn{
  padding: 10px;
  border-radius: 5px;
  color: white;
  background-color: grey;
  border: 1px solid grey;
}
`
