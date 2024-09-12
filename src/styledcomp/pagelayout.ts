import styled from "styled-components";


export const Header = styled.div`
height: 50px;
display:flex;
justify-content: space-between;
align-items:center;
background-color: lightblue;
`


export const StyledCartItem = styled.div<{height:string , istitle?: boolean}>`
height: ${props =>  props.height};
padding: 10px;
padding-top : ${props => props.istitle ? "0px" : "10px"}
`;
