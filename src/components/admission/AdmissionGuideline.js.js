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
                </p>
                <p>
                  Step 1: Carefully input the Learner's valid details. (i.e.
                  Name, Date of Birth, Address). Please note that it is
                  important to pick an Entrepreneurship Course. N:B A recent
                  passport photograph, scanned copy of the Learner's Birth
                  Certificate and Last Result/Report are required to be uploaded
                  when filling the application form.
                </p>
                <p>Step 2: Input all Parents and Guardians details.</p>
                <p> Step 3: Proceed to make Payment.</p>
                <p>Step 4: Confirm payment details and print receipt.</p> For
                applicants who could not complete the registration at ones can
                choose to continue by following the procedures below;
                <ul>
                  <li>
                    <p>
                      a). A mail containing a reference code will drop in the
                      email address filled in the parent details. (please note
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
                    <p>
                      {" "}
                      d) Un-check "Use Login Credentials" to use the reference
                      code.
                    </p>
                  </li>

                  <li>
                    <p>e). Input reference code.</p>
                  </li>

                  <li>
                    <p>f). Click on Continue.</p>
                  </li>
                  <li>
                    <p>g). Complete Registration.</p>
                  </li>
                </ul>
                Thank you for choosing Firdaus gate model college.
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
  .modal {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
