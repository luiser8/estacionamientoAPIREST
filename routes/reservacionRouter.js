import express from 'express';
import { getReservacion, getReservacionForId, postReservacion, putReservacion, deleteReservacion, getReservacionForPuesto } from '../controllers/reservacionController.js';

const reservacionRouter = express.Router();
reservacionRouter.get('/', getReservacion);
reservacionRouter.get('/:id', getReservacionForId);
reservacionRouter.get('/puesto/:id', getReservacionForPuesto);
reservacionRouter.post('/', postReservacion);
reservacionRouter.put('/:id', putReservacion);
reservacionRouter.delete('/:id', deleteReservacion);

export default reservacionRouter;