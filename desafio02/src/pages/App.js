
import { useState } from 'react';
import gitLogo from '../assets/github-logo.png'
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from './styles'


function App() {
  
  const [curentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {

    try{

    const {data} = await api.get(`repos/${curentRepo}`)

    if(data.id){

      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist){
         setRepos(prev => [...prev,data]);
      setCurrentRepo('');
      return
      }else{
        alert(' 😄 Repositório já foi adicionado')
      }
      
    }
  }catch(error){
    if (error.response && error.response.status === 404) {
      alert('⚠ Repositório não encontrado no GitHub!');
  }
}
}


  return (
    <Container>
      <img src={gitLogo} with={72} height={72} alt='github logo'/>
      <Input value={curentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo repo={repo} />)}
      
    </Container>
  );
}


export default App;
