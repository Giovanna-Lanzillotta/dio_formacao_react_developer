// Input
import React from 'react'

import { ErrorText, IconContainer, InputContainer, InputText } from './styles';

// Serve para integrar o formulário com componentes de input customizados
import { Controller } from "react-hook-form";

const Input = ({leftIcon, name, control, errorMessage, ...rest}) => {
  return (
    <>
    <InputContainer>
    {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
    <Controller
    name={name} // Nome único do campo (identificador no formulário)
        control={control} // Conecta este campo ao useForm principal do componente
        rules={{ required: true }} // Regra de validação: o preenchimento deste campo é obrigatório
        render={({ field }) => <InputText {...field}  {...rest} value={field.value || ''} />} // Renderiza e passa o controle do React Hook Form para o seu input customizado
     />
        
    </InputContainer>
    {/* Se existir uma mensagem de erro (errorMessage for verdadeiro), renderiza o componente de texto com o erro. Senão (:), não mostra nada (null) */}
    {errorMessage ? <ErrorText>{errorMessage} </ErrorText> : null}
    </>
  )
}


export { Input };