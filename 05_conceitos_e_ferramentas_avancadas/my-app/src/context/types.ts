
import React, { ReactNode, } from 'react';
import { IUser } from '../types/user'

export interface IAuthContext {
    user: IUser;
    handleLogin: (LoginData: ILoginData) => Promise<void>
    handleSignOut: () => void // Função para deslogar o usuário (Sair)
}

export interface IAuthContextProviderProps {
    children: ReactNode;
}

export interface ILoginData {
    email: string;
    password: string;
}