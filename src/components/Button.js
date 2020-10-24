import styled from "styled-components"


export const Button = styled.button`
    background: transparent;
    text-transform: capitalize;
    border-radius: .3rem;
    border: 2px solid var(--lightBlue);
    color: var(--lightBlue);
    cursor:pointer ;
    margin: 0 1em;
    padding: 0.25em 1em;
    transition: all 0.5s ease-in-out;
    &:hover {
        background-color : var(--lightBlue);
        color: var(--mainWhite);
    }
    &:focus{
        outline:none;
    }
`