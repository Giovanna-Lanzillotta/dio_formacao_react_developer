import {Container, Content, Row} from './styles'

import Input from './components/Input'
import Button from './components/Button'
import { useState } from 'react'
import { ScientificButton } from './components/Button/style'

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState(0);
  const [operation, setOperation] = useState('');


  // Função para limpar tela da calculadora
  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    
  };

  const handleAddNumber = (num) =>{
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  };


  // Função Soma
  const handleSumNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setFirstNumber('0')
      setOperation('')
    }
  }

  // Função Subtração
  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    }else {
      const sub = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sub))
      setFirstNumber('0')
      setOperation('')
    }
  }

  // Função Multiplicação
  const handleMultiplyNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*')
    }else {
      const mul = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(mul))
      setFirstNumber('0')
      setOperation('')
    }
  }

   // Função Divisão
  const handleDivNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/')
    }else {
      const div = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(div))
      setFirstNumber('0')
      setOperation('')
    }
  }

  // Função porcentagem
   const handlePercent = () => {
    if (firstNumber !== '0') {
    const perc = (Number(firstNumber) * Number(currentNumber)) / 100;
        setCurrentNumber(String(perc));
    } else {
        const perc = Number(currentNumber) / 100;
        setCurrentNumber(String(perc));
    }
  }


  // Função do igual
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
           case '-':
          handleMinusNumbers();
          break;
          case '*':
            handleMultiplyNumbers();
            break;
          case '/':
            handleDivNumbers();
            break;
            case '**':
              handleExponentiation();
              break;
          default: 
          break;
      }
     
  }
  }

  //Função para colocar vírgula
  const handleAddDot = () => {
    if (!currentNumber.includes('.')) {
        setCurrentNumber(prev => `${prev}.`);
    }
};

  // Função para apagar um número
  const handleBackspace = () => {
    setCurrentNumber(prev => {
        if (prev.length <= 1) {
            return '0';
        }
        return prev.slice(0, -1);
    });
};

  // Cálculos da calculadora científica

  // Função PI
  const handlePi = () => {
    setCurrentNumber(String(Math.PI));
  }

  // Função Euler
  const HandleEuler = () => {
    setCurrentNumber(String(Math.E));
  }

  //Função Potência
  const handleExponentiation = () => {
    if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation('**')
  }else {
    const pot = Number(firstNumber) ** Number(currentNumber);
    setCurrentNumber(String(pot))
    setFirstNumber('0');
    setOperation('');
  }
}

  // Função Raiz quadrada
  const handleSqrt = () => {
    const raiz = Math.sqrt(Number(currentNumber));
    setCurrentNumber(String(raiz))
  }

  // Função x ao quadrado
  const handleSquare = () => {
    const qua = Number(currentNumber) ** 2
    setCurrentNumber(String(qua))
  }

  // Função do logaritmo na base 10
  const handleLog = () => {
    const log = Math.log10(Number(currentNumber))
    setCurrentNumber(String(log))
  }

  // Função do logaritmo natural
  const handleLg = () => {
    const lg = Math.log(Number(currentNumber))
    setCurrentNumber(String(lg))
  }

  // Função do fatorial
  const handlefactorial = () => {
    let n = Number(currentNumber);
    if (n < 0) {
        setCurrentNumber("ERRO!!! Não existe fatorial de número negativo"); 
        return;
    } 
    let fact = 1;
    for (let i = n; i > 1; i--) {
        fact *= i;
    }
    setCurrentNumber(String(fact));
};

  // Função do inverso
const handleReciprocal = () => {
    const current = Number(currentNumber);
    if (current === 0) {
        setCurrentNumber("ERRO!!! Não é possível dividir por zero");
        return;
    }
    const inv = 1 / current; 
    setCurrentNumber(String(inv));
};


  // Função do exponencial de base 10
    const handleExponentiation10 = () => {
    const pot10 = 10 ** Number(currentNumber); 
    setCurrentNumber(String(pot10));
    setFirstNumber('0'); 
};

  return (
    <Container>
      <Content>
        <Input value={currentNumber} /> 
    
        <Row>
          <ScientificButton  label="1/x" onClick={handleReciprocal} >1/x</ScientificButton>
          <ScientificButton label="π" onClick={() => handlePi('π')}>π</ScientificButton>
          <ScientificButton label="e" onClick={() =>HandleEuler('e')}>e</ScientificButton>
          <Button label="c" onClick={handleOnClear}/>
          <Button label="⌫" onClick={handleBackspace}/>
        </Row>

          <Row>
          <ScientificButton  label="n!" onClick={handlefactorial}>n!</ScientificButton>
          <ScientificButton label="xsqrt" onClick={() => handleSqrt('xsqrt')}>√</ScientificButton>
          <ScientificButton label="x²" onClick={() => handleSquare('x²')}>x²</ScientificButton>
          <Button label="%" onClick={handlePercent}/>
          <Button label="=" onClick={handleEquals} gridSpan/>
        </Row>

        <Row>
            <ScientificButton label="10ˣ" onClick={handleExponentiation10}>10ˣ</ScientificButton>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="x" onClick={handleMultiplyNumbers} />
          </Row>

            <Row>
            <ScientificButton label="log" onClick={() => handleLog('log')}>log</ScientificButton>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="-" onClick={handleMinusNumbers}/>
          </Row>  

           <Row>  
            <ScientificButton label="lg" onClick={() => handleLg('lg')}>lg</ScientificButton>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
           <Button label="+"  onClick={handleSumNumbers}/>
            </Row>

        <Row>
            <ScientificButton label="xʸ" onClick={() => handleExponentiation('π')}>xʸ</ScientificButton>
            <Button label=","  onClick={handleAddDot}/>
            <Button label="+/-"/>
            <Button label="0" onClick={() => handleAddNumber('0')}/>
            <Button label="/" onClick={handleDivNumbers}/>
          </Row>

      </Content>
    </Container>
  );
}

export default App;
