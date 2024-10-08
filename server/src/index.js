import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongo.js";
import router from "./routes/router.js";
import cors from "cors";

dotenv.config();
const CONTAINER_PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get("/" ,(req, res)=>{
    res.json({message: "Hola Mundo, la base datos esta funcionando"})
})

app.use("/api" ,router)

app.listen(CONTAINER_PORT ,()=>{
    console.log("Aplicacion en marcha en el puerto " + process.env.APP_PORT);
})

