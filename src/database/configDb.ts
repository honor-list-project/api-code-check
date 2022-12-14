//  Configuração de conexão com banco de dados
import { DataSource } from "typeorm"
import { User } from "../models/userModel";


const DB = new DataSource({
    // type: "mysql",
    // host: "localhost",
    // port: 3306,
    // database: "code_check",
    // username: "root2",
    // password: "1234",
    // entities: [User],
    // synchronize: true,
    // logging: false,
    type: "mysql",
    host: process.env.API_HOST,
    port: Number(process.env.API_DATABASE_PORT),
    database: process.env.API_DATABASE,
    username: process.env.API_USER_DATABASE,
    password: process.env.API_PASSWORD_DATABASE,
    entities: [User],
    synchronize: true,
    logging: false,
})

export default DB.initialize();