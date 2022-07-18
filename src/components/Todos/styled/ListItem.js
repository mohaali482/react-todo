import styled from "styled-components";

export const ListItem = styled.div`
min-width: 83%;
min-height: 50px;
display: flex;
align-items: center;
justify-content: space-between;
border: 1px solid #D60E15;
margin-top: 20px;
border-radius: .5rem;
padding: 5px;
fill: #D60E15;
&:nth-child(even){
    background-color: #D60E15;
    color: black;
    & path{
        fill: black;
    }
}
`