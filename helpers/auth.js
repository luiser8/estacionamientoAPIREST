import jwt from 'jsonwebtoken';
import AuthApp from '../models/authApp.js';
import dotenv from 'dotenv';

dotenv.config();

export const authenticate = async(req, res) => {
    let secret  = process.env.SECRET;
    let token = '';
    const { appName, appPassword } = req.body;
    try{
        const auth = await AuthApp.findOne({'appName': appName, 'appPassword': appPassword});
        if(auth){
           token = jwt.sign({sub: auth._id}, secret, { expiresIn: '7d' }); 
           await AuthApp.findByIdAndUpdate(auth._id, {'appToken': token}, { new: true });

           res.status(200).json(token);
        }else{
            res.status(401).json({'Error':'Error de Autentificacion'});
        }
    }catch(error){
        res.status(404).json({error:error.message});
    }
};