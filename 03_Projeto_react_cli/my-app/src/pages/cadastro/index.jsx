// Cadastro

import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { api } from '../../services/api';

import { 
    Container, 
    Wrapper, 
    Column, 
    Title, 
    TitleCadastro, 
    SubtitleCadastro, 
    CriarText, 
    Row, 
    TermosText, 
    FazerLoginText ,
    ErrorText
} from './styles';

const Cadastro = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    // Função que dispara quando o usuário clica em criar conta
    const onSubmit = async (formData) => {
        try {
            // Simulando a criação de um usuário mandando um POST para a API
            const { data } = await api.post('users', {
                name: formData.nome,
                email: formData.email,
                senha: formData.password
            });

            if(data.id) {
                alert('Conta criada com sucesso! 🥳 ');
                navigate('/feed');
            }
        } catch (e) {
            alert('Houve um erro ao cadastrar, tente novamente.');
        }
    };

    return (
        <>
            <Header />
            <Container>
                {/* Coluna da Esquerda: Texto Principal */}
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>

                {/* Coluna da Direita: Formulário de Cadastro */}
                <Column>
                    <Wrapper>
                        <TitleCadastro>Comece agora grátis</TitleCadastro>
                        <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
                        
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input 
                                placeholder="Nome completo" 
                                leftIcon={<MdPerson color="#8647AD" size={20} />} 
                                name="nome" 
                                control={control} 
                            />
                            {errors.nome && <ErrorText>{errors.nome.message || "Nome é obrigatório"}</ErrorText>}
                            <Input 
                                placeholder="E-mail" 
                                leftIcon={<MdEmail color="#8647AD" size={20} />} 
                                name="email" 
                                control={control} 
                            />
                            {errors.email && <ErrorText>{errors.email.message || "E-mail é obrigatório"}</ErrorText>}

                            <Input 
                                type="password" 
                                placeholder="Password" 
                                leftIcon={<MdLock color="#8647AD" size={20} />} 
                                name="password" 
                                control={control} 
                            />
                            {errors.password && <ErrorText>Senha é obrigatória</ErrorText>}

                            <Button title="Criar minha conta" variant="secondary" type="submit" maxLength/>
                        </form>

                        <Row>
                            <TermosText>
                                Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                            </TermosText>
                        </Row>
                        
                        <Row style={{marginTop: '20px'}}>
                            <CriarText>Já tenho conta.</CriarText>
                            <FazerLoginText onClick={() => navigate('/login')}>Fazer login</FazerLoginText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
};

export { Cadastro };