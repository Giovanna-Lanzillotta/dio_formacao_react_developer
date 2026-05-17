/* Estilo do  ItemRepo */

import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 20px;
    }
    
    .links-contaiener {
    display:flex;
    flex-direction:row;
    
    
    }

    a.remover {
        background-color: #transparent;;
        color: #FFFFFF;
        text-decoration: underline #ff5555;
        margin-top: 20px;
        border-radius: 5px;

                &:hover {
      color: #ff3333; 
}
    }
       

        a.ver {
        background-color: transparent;
        color: #FFFFFF;
        text-decoration: underline #4facfe;;
        margin-top: 20px;
        border-radius: 5px;
        margin-right: 30px;

        &:hover {
      color: #319fff;
    }
    }

    hr { 
        color: #FAFAFA60;
        margin: 20px 0;
    }

`