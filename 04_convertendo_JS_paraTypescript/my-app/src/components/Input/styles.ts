// Estilo Input

import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #3b3450;

    display: flex;
    align-items: center;
    align-bottom: 20px;
    margin-bottom: 20px;
`


export const IconContainer = styled.div`
    margin-right: 10px;
`


export const InputText = styled.input`
    background-color: transparent;
    color: #ffffff;
    width: 100%;
    border: 0 !important;
    height: 30px;
    outline: none;
`

export const ErrorText = styled.p`
    color: #ff0000;
    font-size: 12px;
    margin: 5px 0;
`