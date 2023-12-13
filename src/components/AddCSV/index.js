import React, { useState } from "react";
import Upload from "./upload";
import Preview from "./preview";
import Import from "./import";
import styled from "styled-components";

export default function AddCSV({ onClose, setData, data, handleSubmit }) {
  const [stage, setStage] = useState(1);
  const renderCSV = (props) => {
    switch (stage) {
      case 1:
        return (
          <Upload
            onClose={onClose}
            setData={setData}
            data={data}
            setStage={setStage}

          />
        );
      case 2:
        return (
          <Preview
            setStage={setStage}
            data={data}
            setData={setData}
            handleSubmit
          />
        );
      case 3:
        return <Import setStage={setStage} />;
      default:
        return (
          <Upload
            data={data}
            onClose={onClose}
            setData={setData}
            setStage={setStage}
          />
        );
    }
  };

  function renderTitle() {
    switch (stage) {
      case 1:
        return "Upload CSV";
      case 2:
        return "Preview & Delete";
      case 3:
        return "Import";
      default:
        return "Upload CSV";
    }
  }
  return (
    <>
      <CsvWrapper className="py-5">
        <div className="card card-modal">
          <div className="card-header">
            <h5>{renderTitle()}</h5>
            <button className="btn btn-sm close-btn" onClick={onClose}>
              Close
            </button>
          </div>
          
          <div className="card-body text-center">{renderCSV()}</div>
          <div className="card-footer d-flex justify-content-end">
            <div
              className="btn btn-secondary"
              onClick={() =>
                setStage((prev) => {
                  if (prev === 2) {
                    handleSubmit();
                  } else {
                    return prev + 1;
                  }
                })
              }
            >
              Submit
            </div>
          </div>
        </div>
      </CsvWrapper>
    </>
  );
}
const CsvWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  z-index: 9999999;
  overflow: scroll;
  .card {
    width: 768px;
    height: 500px;
    max-width: 100%;
    margin: 0 auto;
    z-index: 999;
    .card-body {
      overflow-y: scroll;
      width: 100%;
    }
    .upload-area {
      border: 1px dashed lightblue;
      padding: 30px 8px;
    }
  }

  .close-btn {
    position: absolute;
    right: 0;
    top: 0;
  }
`;
