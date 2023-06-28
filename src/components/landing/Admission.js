import React from "react";
import { Button } from "../custom";

export default function Admission() {
  return (
    <div className="container admission">
      <div className="admission-header">
        <h6>ADMISSION</h6>
        <h3>
          Firdaus-Gate Group of Schools is a Government Approved and Acreditted
          Institution.
        </h3>
      </div>
      <div className="admission-body">
        <p className="text-muted small">
          We offer <span>admission</span> into all classes in the scope of
          primary, junior and secondary schools. Start a new admission process,
          or click on the continue admssion button to continue your application.{" "}
        </p>
      </div>
      <div className="admission-buttons">
        <Button>Start Admission</Button>
        <Button variant="transparent">Continue Admssion</Button>
      </div>
    </div>
  );
}
