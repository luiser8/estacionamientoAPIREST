import express from 'express';
import { getComprobante, getComprobanteForId, postComprobante, putComprobante, deleteComprobante, getComprobanteForCod, getComprobanteForPuesto } from '../controllers/comprobanteController.js';

const comprobanteRouter = express.Router();
comprobanteRouter.get('/', getComprobante);
comprobanteRouter.get('/:id', getComprobanteForId);
comprobanteRouter.get('/codigo/:cod/puesto/:id', getComprobanteForCod);
comprobanteRouter.get('/puesto/:id', getComprobanteForPuesto);
comprobanteRouter.post('/', postComprobante);
comprobanteRouter.put('/:id', putComprobante);
comprobanteRouter.delete('/:id', deleteComprobante);

export default comprobanteRouter;