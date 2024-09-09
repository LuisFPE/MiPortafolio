import projectModel from "../models/projectModel.js";

const getAll = async()=> {
    try {
        const projects = await projectModel.find();
        return projects;
    } catch (error) {
        console.error(error);
        return null; 
    }
}

const getById = async(id) =>{
    try {
        const project = await projectModel.findById(id);
        return project;
    } catch (error) {
        console.error(error);
        return null; 
    }
}

const getByProperty = async(property,value) =>{
    try {
        const project = await projectModel.find({[property]:value})
        return project;
    } catch (error) {
        console.error(error);
        return null; 
    }
}

const create = async(data) =>{
    try {
        const project = await projectModel.create(data);
        return project;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const update = async(id,data) =>{
    try {
        const oldProjeect = await projectModel.findByIdAndUpdate(id,data);
        const project = await projectModel.findById(id);
        return project;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async(id) =>{
    try {
        const project = await projectModel.findByIdAndDelete(id);
        return project;
    } catch (error) {
        console.error(error);
        return null;
    }
}


export const functions = {
    getAll,
    getById,
    getByProperty,
    create,
    update,
    remove,
}

export default functions;