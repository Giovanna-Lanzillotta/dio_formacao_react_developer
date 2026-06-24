// Header

import React, { useContext } from 'react'
import logo from '../../assets/logo-dio.png'
import { Button } from '../Button'
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    UserPicture,
    BotaoSair,
} from './styles'
import { AuthContext } from '../../context/auth'
import { Link } from 'react-router-dom'


const Header = () => {

  const { user,handleSignOut } = useContext(AuthContext);

  return (
    <Wrapper>
        <Container>
              <Row>
                <Link to="/">
                  <img src={logo} alt='Logo da dio' />
                </Link>
                {user.id ? (
                    <>
                <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>

            <Row>
              {user.id ? (
                <>
                <UserPicture src="https://avatars.githubusercontent.com/u/198939312?v=4"/>
                <BotaoSair type="button" onClick={handleSignOut}>Sair</BotaoSair>
                </>
              ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
              </>)}
          </Row>
        </Container>
    </Wrapper>
  )
}


export  { Header }