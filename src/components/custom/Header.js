import { styled } from "styled-components";
export const HEADER = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h5 {
  color: ${(props) => (props.white && 'white') || (props.black && 'black')|| 'blue'};
}
h3{
    color: ${(props) => (props.white && 'white') || 'black'};
}
`