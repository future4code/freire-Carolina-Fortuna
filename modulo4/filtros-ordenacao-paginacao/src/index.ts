import { getUsersByTypea } from './endpoints/getUsersByTypea';
import { getAllRecipes } from "./endpoints/getAllRecipes";
import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { getUsersByName } from "./endpoints/getUsersByName";
import { getUsersByOrder } from './endpoints/getUsersByOrder';
import { getUsersLimit } from "./endpoints/getUsersLimit";
import {getUsersFiltered} from "./endpoints/getUsersFiltered"

export const app = express()

app.use(express.json())
app.use(cors())


 app.get("/recipes", getAllRecipes)

app.get("/users/name", getUsersByName)



app.get("/users/limit/", getUsersLimit)

app.get("/users/order", getUsersByOrder)

app.get("/users/filtered", getUsersFiltered)

app.get("/users/:type", getUsersByTypea)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})


