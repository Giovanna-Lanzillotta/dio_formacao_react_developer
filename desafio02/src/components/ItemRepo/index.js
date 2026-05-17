// ItemRepo

import React from 'react'
import { ItemContainer } from './styles'


 function ItemRepo({repo, handleRemoveRepo}) {
  
  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer OnClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <p>{repo.description}</p>
        <div className='links-contaiener'>
          {/* No react se usa className para nome de classe */}
        <a href={repo.html_url} className='ver' rel="noreferrer" target='_blank'>Ver repositório</a>
        <br />
        <a href='#' onClick={handleRemove} className='remover'>Remover</a>
        </div>
        <hr />
    </ItemContainer>
  )
}


export default ItemRepo;