import styled from "styled-components";

export const NavButton = styled.button`
min-width: 20%;
height: 36px;
padding: 0 2rem;
font-size: large;
background-color: #D60E15;
color: white;
border: none;
border-radius: 25rem;
cursor: pointer;

&.active{
    background-color: #020D15;
    color: #D60E15;
    border: 1px solid #D60E15;
}
`