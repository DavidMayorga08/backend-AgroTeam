import express from 'express';
import 'dotenv/config';
import dbConexion from './database/cnxmongoose.js';

const app = express();

app.use(express.json());

app.listen(process.env.PORT, function () {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
    dbConexion();
});