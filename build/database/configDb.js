"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Configuração de conexão com banco de dados
const typeorm_1 = require("typeorm");
const userModel_1 = require("../models/userModel");
const DB = new typeorm_1.DataSource({
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
    entities: [userModel_1.User],
    synchronize: true,
    logging: false,
});
exports.default = DB.initialize();
