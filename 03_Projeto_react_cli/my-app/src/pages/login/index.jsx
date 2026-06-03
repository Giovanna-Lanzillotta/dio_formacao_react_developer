// Login

// Importa o hook responsável por gerenciar e validar formulários de forma performática.
import { useForm } from "react-hook-form";

// Importa o "meio de campo" que conecta as validações do Yup com o React Hook Form
import { yupResolver } from '@hookform/resolvers/yup';
// Importa todas as ferramentas do Yup para criar as regras de validação dos campos
import * as yup from "yup";


import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'


import { api } from '../../services/api'
import { Container, Title, Column, ErrorText, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from './styles';

// Cria o "esquema" (schema) de validação, definindo as regras para cada campo do formulário
const schema = yup.object({
  email: yup.string().email('email não é valido').required('Campo obrigatório'), // Valida se é um texto, se tem o formato de e-mail correto e se foi preenchido
  password: yup.number().min(3,'No minimo 3 caracteres').required(), // O campo password deve ser um texto (string) com o tamanho mínimo de 3 caracteres e é obrigatório
}).required(); // Garante que o objeto do formulário como um todo não venha vazio

const Login = () => {

    const navigate = useNavigate();

    // Ferramentas de controle do formulário
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema), // Conecta as regras de validação do Yup que você criou (schema) ao React Hook Form
        mode: 'onChange', // Faz a validação acontecer em tempo real, ou seja, a cada letra que o usuário digita

    });

    // Ação que acontece após o envio com sucesso
    const onSubmit = async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            console.log('retorno api',data)
            if(data.length === 1){
                navigate('/feed')
            }else {
                console.log('DADOS DIGITADOS:', control?._formValues);
                console.log('errors', errors);
                alert('Email ou senha inválido')
            }
        }catch{
            alert('Houve um erro, tente novamente.')
        }
    };

    return (<>
    <Header /> 
    <Container>
        <Column>
            <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.
            </Title>
        </Column>
        <Column>
            <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                 <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                 {/* Intercepta o envio padrão do formulário, valida todos os campos e só chama a função onSubmit se tudo estiver correto */}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                    name="email" 
                    errorMessage={errors?.email?.message} 
                    control={control} 
                    placeholder="E-mail" 
                    leftIcon={<MdEmail />} />
                     <Input 
                    name="password"
                    errorMessage={errors?.senha?.message}  
                    control={control} 
                    type="password" 
                    placeholder="Senha" 
                    leftIcon={<MdLock />} />
                    <Button title="Entrar" variant="secondary" type="submit" />
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText onClick={() => navigate('/cadastro')}>Criar Conta</CriarText>
                </Row>
            </Wrapper>
        </Column>
    </Container>
    
    </>
)
}

export { Login }