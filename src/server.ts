require('dotenv').config();
import Express from "express";
import Cors from 'cors';
import "reflect-metadata";
import "./database/configDb";
import userRoutes from './routes/userRoutes';
const app = Express();

//Configurações de conexão e host's
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());
app.use(Cors());
app.use(userRoutes);

app.listen( process.env.API_PORT ?? 3333, () => console.log(`Server is running...`));