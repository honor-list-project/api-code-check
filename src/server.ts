import Express from "express";
import Cors from 'cors';
import "reflect-metadata";
import "./database/configDb";
import userRoutes from './routes/userRoutes';
const app = Express();

app.use(Express.json());
app.use(Cors());
app.use(userRoutes);

app.listen(3333, () => console.log('Hello Server'));