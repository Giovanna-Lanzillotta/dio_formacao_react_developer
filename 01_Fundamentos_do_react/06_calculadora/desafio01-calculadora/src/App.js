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

  return (
    <Container>
      <Content>
        <Input value={currentNumber} /> 
    {/* Botões de inverso, pi, euler, apagar e apagar tudo */}
        <Row>
          <ScientificButton  label="1/x" >1/x</ScientificButton>
          <ScientificButton label="π" onClick={() => handlePi('π')}>π</ScientificButton>
          <ScientificButton label="e" onClick={() =>HandleEuler('e')}>e</ScientificButton>
          <Button label="c" onClick={handleOnClear}/>
          <Button label="⌫"/>
        </Row>

          <Row>
          <ScientificButton  label="n!" >n!</ScientificButton>
          <ScientificButton label="xsqrt" onClick={() => handleSqrt('xsqrt')}>√</ScientificButton>
          <ScientificButton label="x²">x²</ScientificButton>
          <Button label="%"/>
          <Button label="=" onClick={handleEquals} gridSpan/>
          
        </Row>

        <Row>
            <ScientificButton label="10ˣ">10ˣ</ScientificButton>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="x" onClick={handleMultiplyNumbers} />
          </Row>

            <Row>
            <ScientificButton label="log">log</ScientificButton>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="-" onClick={handleMinusNumbers}/>
          </Row>  

           <Row>  
            <ScientificButton label="lg">lg</ScientificButton>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
           <Button label="+"  onClick={handleSumNumbers}/>
            </Row>

        <Row>
            <ScientificButton label="xʸ" onClick={() => handleExponentiation('π')}>xʸ</ScientificButton>
            <Button label=","  onClick={handleSumNumbers}/>
            <Button label="+/-"/>
            <Button label="0" onClick={() => handleAddNumber('0')}/>
            <Button label="/" onClick={handleDivNumbers}/>
          </Row>

      </Content>
    </Container>
  );
}

export default App;
