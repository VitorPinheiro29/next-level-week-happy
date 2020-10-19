import express from "express";
import 'express-async-errors';
import path from 'path';
import cors from 'cors';

import "./database/connection";
import errorHandler from "./errors/handler";
import routes from './routes'

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads'))); 
//__dirname é a pasta atual, no caso a src. Os 2 pontos é um "cd.." e depois entra na pasta uploads

app.use(errorHandler);

// Rota = conjunto. Ex: /orphanages
// Recurso = orphanage

// Parâmetros
// Query Params = http://localhost:3333/orphanages?search=diego&page=2
// Route Params = http://localhost:3333/orphanages/1 (Identificar um recurso)
// Body = http://localhost:3333/orphanages/ (grandes dados, passa no body)

app.listen(3333);
