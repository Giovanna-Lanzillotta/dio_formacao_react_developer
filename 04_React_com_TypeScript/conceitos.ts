// Conceitos básicos do TypeScript
// Fundamentos do TypeScript

// Tipagem estática
const nome:String = 'Pablo'
const idade:number = 26;
const ativo:boolean = false;


//Inferência de tipos
const nome2 = 'Pablo'
const idade2 = 26;
const ativo2 = false;


//Interfaces
interface IUsuario{
    nome: string;
    idade: number;
    ativo: boolean;
}
const usuario: IUsuario = {
    nome: 'Pablo',
    idade: 22,
    ativo: true
}


//Types
type IUsuario2 = {
    nome: string;
    idade: number;
    ativo?: boolean;   //opcional
}

const usuario2: IUsuario2 = {
    nome: 'Pablo',
    idade: 22,
    ativo: true
}


// enum
enum CARGO {
    DESENVOLVEDOR = 'desenvolvedr'
}

const usuario3 = {
    nome: 'Pablo',
    cargo: CARGO.DESENVOLVEDOR
}