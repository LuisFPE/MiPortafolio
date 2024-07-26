import connectDB from "../../../src/config/mongo.js";
import projectModel from "../../../src/models/projectModel.js";
import mongoose from "mongoose";

// {} []  { como ejecutar un test si esta dentro de docker: docker exec -it dbName npm test}      

const projectData = {
    title : "BuscarPokemon.com",
    image : "No disponible",
    description: "Una pagina que te permite buuscar la informacion de un pokemon",
    type : "individual",
    publish: "Si",
    visit: "pokemon.luispadua.com",
}

describe("Test de modelo ", ()=>{
    beforeAll(async ()=>{
        await connectDB();
        await mongoose.connection.collections["projects"].drop();
    })
    afterAll(async ()=>{
        await mongoose.connection.close();
    })
    test("añadir registro", async()=>{

        const newModel = await projectModel.create(projectData);
        expect(newModel.title).toEqual(projectData.title);
        expect(newModel.description).toEqual(projectData.description);
        expect(newModel.visit).toEqual(projectData.visit);
    })
})