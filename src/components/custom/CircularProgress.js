import styled from "styled-components";


export default function CircularProgress() {
  return (
    <Wrapper>
      <div className="circular-progress">
      <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
      </div>
    </Wrapper>
  )
}



const Wrapper = styled.div`
top:0;
  height: 100%;
  width: 80%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  z-index:9999;

.circular-progress{
  width: 50px;
  height: 50px;
  .spinner-border{
  color: blue;
  height: 50px !important;
  width: 50px !important;
  font-weight: 700 !important;
}
}
@media screen and (max-width: 1100px) {
 width:100% ;
}
`;
