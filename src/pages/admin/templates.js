import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Templates() {
  const [school, setSchool] = useState("");
  const [link, setLink] = useState("");
  const [filename, setFileName] = useState("");
  const [downloading, setDownloading] = useState(false);

  const downloadFile = async (url, file) => {
    setDownloading(true);
    const response = await fetch(url);
    const reader = response.body.getReader();

    const chunks = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      if (value) {
        chunks.push(value);
      }
    }
    const blob = new Blob(chunks, {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const downloadUrl = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = downloadUrl;
    anchor.download = file;
    document.body.appendChild(anchor);
    anchor.click();
    window.URL.revokeObjectURL(downloadUrl);
    document.body.removeChild(anchor);
    setDownloading(false);
  };
  console.log(school);
  console.log(link);
  return (
    <Wrapper className="py-5">
      <div className="d-flex flex-row justify-content-between container">
        <div>
          <h4>Templates Archive</h4>
          <p>
            Download doc templates for uploading students results and new users'
            accounts.
          </p>
        </div>
      </div>
      <div className="body-content">
        <div className="select-wrapper d-flex flex-column justify-content-start align-items-start p-3 px-4 mt-5">
          <h5>Results Template</h5>
          <p>Select to download any results template of your choice.</p>
          <div className="d-flex flex-row flex-wrap justify-content-start gap-3 align-items-end">
            <div className="d-flex flex-column gap-1 mt-2">
              <div>
                <h6>Select Class</h6>
              </div>
              <select
                onChange={(e) => {
                  setSchool(e.target.value);
                  switch (e.target.value) {
                    case "kg":
                      setLink(
                        "https://res.cloudinary.com/dyunxdvmy/raw/upload/v1720182249/KG_REPORT_cf53yb.xlsx"
                      );
                      setFileName("KG_Template");
                      break;
                    case "nur":
                      setLink(
                        "https://res.cloudinary.com/dyunxdvmy/raw/upload/v1732722316/new-nursery_zuaoum.xlsx"
                      );
                      setFileName("NUR_Template");
                      break;
                    case "pry":
                      setLink(
                        "https://res.cloudinary.com/dyunxdvmy/raw/upload/v1732722394/BASIC_REPORT_1_yhmsz4.xlsx"
                      );
                      setFileName("PRY_Template");
                      break;
                    case "jnr":
                      setLink(
                        "https://res.cloudinary.com/dyunxdvmy/raw/upload/v1732722299/JUNIOR_REPORT_2_g1vodd.xlsx"
                      );
                      setFileName("JNR_Template");
                      break;
                    case "snr":
                      setLink(
                        "https://res.cloudinary.com/dyunxdvmy/raw/upload/v1732722399/SENIOR_REPORT_5_exqrfi.xlsx"
                      );
                      setFileName("SNR_Template");
                      break;
                    default:
                      setLink("");
                      setFileName("");
                      break;
                  }
                }}
              >
                <option value="" disabled selected>
                  Select Class
                </option>
                <option value={"kg"}>Kindergaten Classes</option>
                <option value={"nur"}>Nursery Classes</option>
                <option value={"pry"}>Basic Classes</option>
                <option value={"jnr"}>Junior Classes</option>
                <option value={"snr"}>Senior Classes</option>
              </select>
            </div>{" "}
            <button
              onClick={() => {
                if (link) {
                  downloadFile(link, filename);
                }
              }}
              className="check-btn"
              disabled={!school || downloading}
            >
              {downloading ? "...downloading" : "Download"}
            </button>
          </div>
        </div>

        <div className="select-wrapper d-flex flex-column justify-content-start align-items-start p-3 px-4 mt-5">
          <h5>Accounts Template</h5>
          <p>Download either teachers or students template.</p>
          <div className="d-flex flex-row flex-wrap justify-content-start gap-3 align-items-end">
            <button
              onClick={() => {
                downloadFile(
                  "https://res.cloudinary.com/dyunxdvmy/raw/upload/v1720183295/TEACHER_TEMPLATE_1_chabbt.xlsx",
                  "Teacher_Template"
                );
              }}
              className="check-btn"
              disabled={downloading}
            >
              {downloading ? "...downloading" : "Teacher Template"}
            </button>
            <button
              onClick={() => {
                downloadFile(
                  "https://res.cloudinary.com/dyunxdvmy/raw/upload/v1720183295/STUDENT_TEMPLATE_yjylc1.xlsx",
                  "Student_Template"
                );
              }}
              className="check-btn"
              disabled={downloading}
            >
              {downloading ? "...downloading" : "Student Template"}
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .select-wrapper {
    width: 100%;
    align-items: center;
    width: fit-content;
    span {
      align-items: flex-end;
      justify-content: right;
      color: grey;
    }
    select {
      width: 200px !important;
      padding: 10px;
      border: 1px solid grey;
      color: grey;
      border-radius: 10px;
      background: transparent;
    }
    h6 {
      font-weight: 500 !important;
      font-size: 17px;
      margin: 0 !important;
    }
  }

  .check-btn {
    padding: 5px 20px;
    border: 1px solid blue;
    color: white;
    background-color: blue;
    border-radius: 10px;
  }
  .body-content {
    background-color: white !important;
    min-height: 425px;
  }
`;
