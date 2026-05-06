import {Container, Content, Row} from './styles'

import Input from './components/Input'
import Button from './components/Button'
import { useState } from 'react'


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
          default: 
          break;
      }
     
  }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
          <Row>
            
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="C" onClick={handleOnClear}/>
          </Row>
                    <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="/" onClick={handleDivNumbers}/>
          </Row>    
           <Row>   
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="x" onClick={handleMultiplyNumbers} />
            </Row>
        <Row>
            <Button label="+"  onClick={handleSumNumbers}/>
            <Button label="0" onClick={() => handleAddNumber('0')}/>
            <Button label="-" onClick={handleMinusNumbers}/>
            <Button label="=" onClick={handleEquals}/>
          </Row>
      </Content>
    </Container>
  );
}

export default App;
