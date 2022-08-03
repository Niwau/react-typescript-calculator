import styled from "styled-components";

export const Container = styled.button`
    padding: 30px;
    border: none;
    transition: 0.2s;
    background-color: #1d1b1f;
    color: white;
    cursor: pointer;

    :hover {
        transform: scale(1.1);
        box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.2);
    }

`