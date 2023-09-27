import styled from "styled-components";


export default function CircularProgress() {
  return (
    <Wrapper>
      <div className="circular-progress">

      </div>
    </Wrapper>
  )
}



const Wrapper = styled.div`
top:0;
  height: 100vh;
  width: 80%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  z-index:9999;

.circular-progress{
  width: 50px;
  height: 50px;
  display: inline-block;
  border-width: 5px;
  border-color: blue;
  border-top-color: #000;
  animation: spin 1s infinite linear;
  border-radius: 100%;
  border-style: solid;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
}
@media screen and (max-width: 1100px) {
 width:100% ;
}
`;
