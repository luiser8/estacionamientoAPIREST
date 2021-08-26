import express from 'express';
import { getFactura, getFacturaForId, postFactura, putFactura, deleteFactura } from '../controller/facturaController.js';

const facturaRouter = express.Router();
facturaRouter.get('/', getFactura);
facturaRouter.get('/:id', getFacturaForId);
facturaRouter.post('/', postFactura);
facturaRouter.put('/:id', putFactura);
facturaRouter.delete('/:id', deleteFactura);

export default facturaRouter;