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
import { IFormDataCadastro } from './types';

const Cadastro = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<IFormDataCadastro>({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData: IFormDataCadastro) => {
        try {
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
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>

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
                            {errors.nome?.message && typeof errors.nome.message === 'string' ? (
                            <ErrorText>{errors.nome.message}</ErrorText>
                            ) : null}
                            <Input 
                                placeholder="E-mail" 
                                leftIcon={<MdEmail color="#8647AD" size={20} />} 
                                name="email" 
                                control={control} 
                            />
                            {errors.email?.message && typeof errors.email.message === 'string' ? (
                            <ErrorText>{errors.email.message}</ErrorText>
                            ) : null}

                            <Input 
                                type="password" 
                                placeholder="Password" 
                                leftIcon={<MdLock color="#8647AD" size={20} />} 
                                name="password" 
                                control={control} 
                            />
                            {errors.password && <ErrorText>Senha é obrigatória</ErrorText>}

                            <Button title="Criar minha conta" variant="secondary" type="submit"/>
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