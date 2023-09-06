import styled from "styled-components";

export const Button = styled.button`
background-color: ${(props=>(props.blue && 'blue') || (props.white && 'white'))};
color: ${(props=>(props.blue && 'white') || (props.white && 'black'))};
font-weight:600 !important;
border:1px solid blue;
padding:10px 15px;
border-radius: 9px;
&:hover{
  transition: 0.4s;
  background-color: ${(props=>(props.blue && '#04048d') || (props.white && 'blue'))};
color: ${(props=>(props.blue && 'white') || (props.white && 'white'))};
transition: 0.5s;
}
`

