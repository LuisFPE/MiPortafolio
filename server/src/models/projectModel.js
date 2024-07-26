import mongoose from "mongoose";

const projectSchema  = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        unique: true
    },
    image : {
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    },
    type : {
        type:String,
        enum : ["individual","grupal"],
        default: "individual"
    },
    publish:{
        type: String,
        required: true
    },
    visit:{
        type: String,
        required: true
    },
})

const projectModel = mongoose.model("projects",projectSchema);

export default projectModel;