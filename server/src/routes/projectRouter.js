import {Router} from "express";
import multer from "multer";
import fs from 'fs'; // librería para manejar archivos
import projectApiController from "../controllers/projectApiController.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const router  = Router();

const Current_dir = dirname(fileURLToPath(import.meta.url));

const multerUpload = multer({
    storage: multer.diskStorage({
        destination: join(Current_dir, '../uploads'),
        filename: (req, file, cb) =>{
            const fileName = file.originalname;
            cb(null, fileName);
        }
    }),
});

router.get("/",projectApiController.getAll);
router.get("/byproperty",projectApiController.getByProperty);
router.get("/:id",projectApiController.getById);

/**
 * Endpoint para obtener archivos subidos
 */
router.get("/uploads/:file", (req, res) => {
    const {  file } = req.params; // nombre del archivo en la ruta
    const filePath = `./src/uploads/${file}`; // ruta donde se encuentra el archivo
    if (!fs.existsSync(filePath)) { // si el archivo no existe
        res.status(404).send("Error: File not found"); // devolvemos un error
        return;
    }
    res.sendFile(filePath, { root: "." }); // devolvemos el archivo. Es necesario root: "." para que la ruta sea relativa
});

router.post("/",projectApiController.create);

/**
 * Endpoint para subir archivos
 */
router.post("/upload", multerUpload.single('file'), (req, res) => {
    res.json({
        fileName: req.fileName
    });
});

router.put("/:id",projectApiController.update);
router.delete("/:id",projectApiController.remove);

export default router;