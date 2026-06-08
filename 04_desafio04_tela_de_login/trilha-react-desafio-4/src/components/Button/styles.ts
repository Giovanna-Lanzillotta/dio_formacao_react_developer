import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #ff9900;
    color: #000;

    border: 1px solid #ff9900;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }

    &:disabled {
        background-color: #cc7a00; 
        cursor: not-allowed;      
        opacity: 0.6;            
  }
`