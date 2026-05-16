
import gitLogo from '../assets/github-logo.png'
import Input from '../components/Input';

import { Container } from './styles'


function App() {
  return (
    <Container>
      <img src={gitLogo} with={72} height={72} alt='github logo'/>
      <Input />
    </Container>
  );
}

export default App;
