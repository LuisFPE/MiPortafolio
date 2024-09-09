import projectController from "./projectController.js";

const getAll = async(req,res)=>{
    const projects = await projectController.getAll();
    res.json({data:projects});
}

const getById = async (req,res) =>{
    const id = req.params.id
    const project = await projectController.getById(id);
    res.json({data:project});
}

const getByProperty=async(req,res)=>{
    const {property,value}=req.query;
    const projects = await projectController.getByProperty(property,value);
    res.json({data:projects})
}

const create = async(req,res)=>{
    console.log("informacion obtenida al crear: ", req.body)
    const project = await projectController.create(req.body);
    res.json({data:project})
}

const update = async(req,res)=>{
    const id =req.params.id;
    const project = await projectController.update(id,req.body);
    res.json({data:project})
}

const remove = async(req,res)=>{
    const id= req.params.id;
    const project = await projectController.remove(id);
    res.json({data:project})
}

export default{
    getAll,
    getById,
    getByProperty,
    create,
    update,
    remove
}

