import {Router} from "express";
import projectRouter from "./projectRouter.js";

const router = Router();

router.get("/",(req,res)=>{
    res.json({data:"hello api"});
})

router.use("/projects",projectRouter);

export default router;