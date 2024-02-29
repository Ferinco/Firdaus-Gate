import React from "react";
import styled from "styled-components";

export default function AdmissionGuideline({ isShow, onToggle }) {
  return (
    <Wrapper>
      <div
        className="modal fade show"
        data-bs-backdrop="static"
        tabIndex={-1}
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h4>Admission form Guideline</h4>
              <button type="button" className="btn-close" onClick={onToggle} />
            </div>
            <div className="modal-body">
              <small>
                <p>
                  We welcome our Dear Esteemed Prospective Parents/ Guardians
                  and Students to Firdaus College... We are honored by your
                  interest in Firdaus Gate Model College. Thank you for taking
                  the time to learn more about us. Kindly follow the highlighted
                  Steps on Filling the Admission Form.
                </p> ones
                <p>
                  Step 1: Carefully input the Learner's valid details. (i.e.
                  Name, Date of Birth, Address).
                </p>
                <p>Step 2: Input all Parents and Guardians details.</p>
                <p> Step 3: Proceed to make Payment.</p>
                <p>Step 4: Confirm payment details and print receipt.</p> For
                applicants who could not complete the registration at once can
                choose to continue by following the procedures below;
                <ul>
                  <li>
                    <p>
                      a). A mail containing a reference code will drop in the
                      email address filled in the parents' details. (please note
                      that you will only get this mail when you have filled step
                      1 & 2 of the admission form).
                    </p>
                  </li>

                  <li>
                    <p>b).Go back to the Home page.</p>
                  </li>

                  <li>
                    {" "}
                    <p>c). Click on "Complete Application"</p>{" "}
                  </li>

                  <li>
                    <p>d). Input reference code.</p>
                  </li>

                  <li>
                    <p>e). Click on Continue.</p>
                  </li>
                  <li>
                    <p>f). Complete Registration.</p>
                  </li>
                </ul>
                Thank you for choosing Firdaus-Gate Model School.
              </small>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onToggle}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
z-index: 9999;
background: rgba(0, 0, 0, 0.6);

`;
