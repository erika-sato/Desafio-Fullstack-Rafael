// Responsável por montar a arquitetura do banco de dados
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Produtos {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    preco: string;

    @Column()
    estoque: string;
}