import express from 'express';
import { authenticate } from '../helpers/auth.js';

const authRouter = express.Router();
authRouter.post('/authenticate', authenticate);

export default authRouter;