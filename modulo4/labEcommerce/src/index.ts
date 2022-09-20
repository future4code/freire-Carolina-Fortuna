import app from "./app"
import createProducts from "./endpoints/createProducts"
import createUser from "./endpoints/createUser"
// import deleteCharacter from "./endpoints/deleteCharacter"
import getAllUsers from "./endpoints/getAllUsers"
import getAllProducts from "./endpoints/getAllProducts"
import createPurchases from "./endpoints/createPurchases"
import getPurchaseByUser from "./endpoints/getPurchaseByUser"




app.post("/users", createUser)

app.get("/users", getAllUsers)

app.post("/products", createProducts)

app.get("/products", getAllProducts)

app.post("/purchases", createPurchases)

app.get("/users/:user_id/purchases", getPurchaseByUser)

// app.get("/movie/:id/characters")


// app.delete("/movies")