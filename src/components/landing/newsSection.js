import styled from "styled-components";

export default function News() {
  return (
    <Wrapper className="py-5">
        <div className="container d-flex align-items-center flex-column gap-5">
        <div className="header d-flex flex-column justify-content-center align-items-center">
          <h6 className="pre-header">latest news</h6>
          <h2>Check Our Latest News</h2>
        </div>

        </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 500px;
  width: 100%;
`;
