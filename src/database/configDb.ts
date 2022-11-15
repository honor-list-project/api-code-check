//  Configuração de conexão com banco de dados
import { DataSource } from "typeorm"
import { User } from "../models/userModel";


const DB = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    database: "code_check",
    username: "root2",
    password: "1234",
    entities: [User],
    synchronize: true,
    logging: false,
})

export default DB.initialize();