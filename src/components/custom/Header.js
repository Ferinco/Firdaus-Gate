import { styled } from "styled-components";
export const Header = styled.div `
display: flex;
flex-direction: column;
justify-content:${(props)=>(props.left && 'left') || 'center'};
align-items: ${(props)=>(props.left && 'left') || 'center'};
h5 {
  color: ${(props) => (props.white && 'white') || (props.black && 'black')|| 'blue'};
font-size: 17px;
}
h3{
    color: ${(props) => (props.white && 'white') || 'black'};
    font-size: 40px;
    font-weight: 800;
}
`