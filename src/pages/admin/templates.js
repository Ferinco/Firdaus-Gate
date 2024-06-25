import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Templates() {
  const [school, setSchool] = useState("");
  const [link, setLink] = useState("");
  const [filename, setFileName] = useState("");
  const [downloading, setDownloading] = useState(false);

  const updateFileLink = () => {
    switch (school) {
      case "kg":
        setLink(
          "https://res.cloudinary.com/dyunxdvmy/raw/upload/v1719311579/KG_REPORT_-_Sheet1_3_qudzv6.csv"
        );
        setFileName("KG_Template.csv");
        break;
      case "nur":
        setLink("");
        setFileName("NUR_Template.csv");
        break;
      case "pry":
        setLink("");
        setFileName("PRY_Template.csv");
        break;
      case "jnr":
        setLink("");
        setFileName("JNR_Template.csv");
        break;
      case "snr":
        setLink("");
        setFileName("SNR_Template.csv");
        break;
      default:
        setLink("");
        setFileName("");
        break;
    }
  };

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
    const blob = new Blob(chunks, { type: "text/csv" });
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
                      "https://res.cloudinary.com/dyunxdvmy/raw/upload/v1719311579/KG_REPORT_-_Sheet1_3_qudzv6.csv"
                    );
                    setFileName("KG_Template.csv");
                    break;
                  case "nur":
                    setLink(
                      "https://res.cloudinary.com/dyunxdvmy/raw/upload/v1719318540/NURSERY_REPORTS_-_Sheet1_9_ocba25.csv"
                    );
                    setFileName("NUR_Template.csv");
                    break;
                  case "pry":
                    setLink(
                      "https://res.cloudinary.com/dyunxdvmy/raw/upload/v1719318346/BASIC_REPORT_-_Sheet1_3_kk6cdt.csv"
                    );
                    setFileName("PRY_Template.csv");
                    break;
                  case "jnr":
                    setLink(
                      "https://res.cloudinary.com/dyunxdvmy/raw/upload/v1719318708/JUNIOR_REPORT_-_Sheet1_5_ibldow.csv"
                    );
                    setFileName("JNR_Template.csv");
                    break;
                  case "snr":
                    setLink(
                      "https://res.cloudinary.com/dyunxdvmy/raw/upload/v1719317418/SENIOR_REPORT_-_Sheet1_4_ua1ytx.csv"
                    );
                    setFileName("SNR_Template.csv");
                    break;
                  default:
                    setLink("");
                    setFileName("");
                    break;
                }
              }}
            >
              <option value="" disabled selected>
                Select School
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
              downloadFile("https://res.cloudinary.com/dyunxdvmy/raw/upload/v1719319672/TEACHER_TEMPLATE_-_Sheet1_8_nbqsop.csv", "Teacher_Template.csv");
            }}
            className="check-btn"
            disabled={downloading}
          >
            {downloading ? "...downloading" : "Teacher Template"}
          </button>
          <button
            onClick={() => {
              downloadFile("https://res.cloudinary.com/dyunxdvmy/raw/upload/v1719311480/STUDENT_TEMPLATE_-_student_test_csv_18_lbx7ew.csv", "Student_Template.csv");
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
  .body-content{
  background-color: white !important;
  min-height: 425px;
  }
`;
