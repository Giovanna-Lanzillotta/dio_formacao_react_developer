// Cadastro estilo

import styled from 'styled-components';


export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`

export const Wrapper = styled.div`
    max-width: 380px;
    margin-left: auto; /* Empurra o formulário para alinhar bem à direita */
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 420px;
    line-height: 44px;
    color: #FFFFFF;
`

export const TitleCadastro = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 8px;
    color: #FFFFFF;
`

export const SubtitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;
    color: #FFFFFF;
`

export const TermosText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #FFFFFF;
    margin-top: 25px;
`

export const CriarText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #FFFFFF;
`

export const ErrorText = styled.p`
    color: #FF0000;
    font-family: 'Open Sans';
    font-size: 12px;
    margin: 5px 0 10px 0;
`

export const FazerLoginText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #fa78ae; 
    margin-left: 5px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`