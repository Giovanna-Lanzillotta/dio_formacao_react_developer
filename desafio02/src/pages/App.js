
import gitLogo from '../assets/github-logo.png'

import { Container } from './styles'


function App() {
  return (
    <Container>
      <img src={gitLogo} with={72} height={72} alt='github logo'/>
    </Container>
  );
}

export default App;
