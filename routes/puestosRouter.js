import express from 'express';
import { getPuesto, getPuestoForId, postPuesto, putPuesto, deletePuesto } from '../controller/puestosController.js';

const puestosRouter = express.Router();
puestosRouter.get('/', getPuesto);
puestosRouter.get('/:id', getPuestoForId);
puestosRouter.post('/', postPuesto);
puestosRouter.put('/:id', putPuesto);
puestosRouter.delete('/:id', deletePuesto);

export default puestosRouter;