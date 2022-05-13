import "reflect-metadata"
import { DataSource } from "typeorm"
import { Produtos } from "./entity/Produtos"
 
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "engprod123@",
    database: "db_produtos",
    synchronize: true,
    logging: false,
    entities: [Produtos],
    migrations: [],
    subscribers: [],
})


