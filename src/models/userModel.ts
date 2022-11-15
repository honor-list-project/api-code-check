//  Modelo da tabela de users do banco de dados
import { Entity, PrimaryGeneratedColumn, ObjectIdColumn, Column } from 'typeorm';

export enum CargoUser {
    ADM = 'Admin',
    USER = 'User',
    FUNCIONARIO = 'Funcionario'
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