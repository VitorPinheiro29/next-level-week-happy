import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

// Arquitetura MVC

//Model //representação de uma entidade
//Views //como vai chegar no frontend
//Controllers

routes.post("/create-orphanages",upload.array('images'), OrphanagesController.create);   
routes.get("/list-orphanages", OrphanagesController.index);   
routes.get("/list-orphanages/:id", OrphanagesController.show);   

  export default routes;