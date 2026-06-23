export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string; // o password não fica exposto, é apenas para didática
}