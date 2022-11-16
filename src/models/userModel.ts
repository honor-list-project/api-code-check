//  Modelo da tabela de users do banco de dados
import { Entity, PrimaryGeneratedColumn, ObjectIdColumn, Column } from 'typeorm';

export enum CargoUser {
    ADM = 'Admin',
    SUB_ADM = "SubAdmin",
    USER = 'User',
    FUNCIONARIO = 'Funcionario'
}

//verifica se o valor informado existe dentro do enum de Cargos do Usuário
const valuesUserCargo = {
    [CargoUser.ADM]: true,
    [CargoUser.USER]: true,
    [CargoUser.SUB_ADM]: true,
    [CargoUser.FUNCIONARIO]: true,
}

export const isDataExistInEnum = (value:string) => {
    return valuesUserCargo[value] || false
}

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    telefone: string;

    @Column()
    cpf: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: CargoUser,
        default: CargoUser.USER
    })
    cargo: CargoUser;
}