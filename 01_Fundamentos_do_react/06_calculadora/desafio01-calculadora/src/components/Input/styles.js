// Estilização do visor

import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color : #5a5a5a;
    box-shadow: inset 0 -2px 5px #000000;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';
    
    input {
        width: 100%;
        height: 75px;
        background-color : #5a5a5a;
        border: 0;
        box-shadow: inset 0 3px 10px #000000;

        display: flex;
        flex-dirction: column;
        align-items: flex-end;

        font-size: 24px;
        font-family: 'Roboto';
        padding: 0 10px;
        color: #d6d6d6
    }
`
