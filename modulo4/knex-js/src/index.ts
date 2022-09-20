// no index.ts:

import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import connection from './connection'

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());


const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
      // Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
      // o valor no resultado!
    const count = result[0][0].count;
    return count;
  };



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});