import styled from "styled-components";
export default function ContactUs() {
  return (
    <Contact>
      <div className="container d-flex w-100 justify-content-between py-4">
        <div>
          <h6>Find Our School</h6>
        </div>
        <div>
          <h6>Call Us On</h6>
          <h6>09134786486</h6>
        </div>
        <div>
          <h6>Email Us</h6>
          <h6>firdausuibdnehriy</h6>
        </div>
      </div>
    </Contact>
  );
}
const Contact = styled.div`
background:#f5f5f5;
color: black;
`;
