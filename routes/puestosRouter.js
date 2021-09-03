import express from 'express';
import { getPuesto, getPuestoForId, postPuesto, putPuesto, deletePuesto, putChangeEstadoPuesto } from '../controllers/puestosController.js';

const puestosRouter = express.Router();
puestosRouter.get('/', getPuesto);
puestosRouter.get('/:id', getPuestoForId);
puestosRouter.post('/', postPuesto);
puestosRouter.put('/:id', putPuesto);
puestosRouter.put('/estado/:id', putChangeEstadoPuesto);
puestosRouter.delete('/:id', deletePuesto);

export default puestosRouter;