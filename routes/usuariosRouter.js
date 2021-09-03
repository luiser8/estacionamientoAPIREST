import express from 'express';
import { getUsuario, getUsuarioForId, postUsuario, putUsuario, deleteUsuario } from '../controllers/usuariosController.js';

const usuariosRouter = express.Router();
usuariosRouter.get('/', getUsuario);
usuariosRouter.get('/:id', getUsuarioForId);
usuariosRouter.post('/', postUsuario);
usuariosRouter.put('/:id', putUsuario);
usuariosRouter.delete('/:id', deleteUsuario);

export default usuariosRouter;