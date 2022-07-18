import styled from "styled-components";

export const CenteredDiv = styled.div`
display: flex;
justify-content: ${props => props.justify || 'center'};
align-items: center;
`