// ItemRepo

import React from 'react'
import { ItemContainer } from './styles'


 function ItemRepo() {
  return (
    <ItemContainer>
        <h3>Giovanna</h3>
        <p> Dio Giovanna</p>
        {/* No react se usa className para nome de classe */}
        <a href='#' >Ver repositório</a>
        <br />
        <a href='#' className='remover'>Remover</a>
        <hr />
    </ItemContainer>
  )
}


export default ItemRepo;