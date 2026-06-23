
import React, { ReactNode, } from 'react';
import { IUser } from '../types/user'

export interface IAuthContext {
    user: IUser;
    handleLogin: (LoginData: ILoginData) => Promise<void>
}

export interface IAuthContextProviderProps {
    children: ReactNode;
}

export interface ILoginData {
    email: string;
    password: string;
}