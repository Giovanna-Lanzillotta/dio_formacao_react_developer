// Estilização dos botões

import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #a8a8a8;
    background-color: #DCDCDC;
    color: #000833;
    box-shadow: 2px 2px 4px #000000;
    font-size: 24px;
    font-weight: 700;
    font-family: 'Roboto';
    flex: 1;

    height: 80px;
    box-sizing: border-box;

    &:hover{
    opacity: 0.8;
    box-shadow: 0 4px 4px #000000;
    }

    &:active {
        box-shadow: 0 2px 4px #000000;
        transform: translateY(0); 
    }

`

export const ScientificButton = styled(ButtonContainer)`
    display: none; 
    
   
    @media (min-width: 768px) {
        display: flex;
        background-color: #ffb662;
        padding: 10px;
        border: 2px solid #e97c00;
        box-shadow: 2px 2px 2px #000000;
        font-size: 20px;
        font-weight: 700;

        align-items: center;     
        justify-content: center;  

    }
`;
