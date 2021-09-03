import mongoose from 'mongoose';
import Usuario from '../models/usuario.js';

export const getUsuario = async(req, res) => {
    try{
        const usuario = await Usuario.find();
        res.status(200).json(usuario)
    }catch(error){
        res.status(404).json({error:error.message});
    }
};
export const getUsuarioForId = async(req, res) => {
    const { id } = req.params;
    try{
        const usuario = await Usuario.findById(id);
        res.status(200).json(usuario)
    }catch(error){
        res.status(404).json({error:error.message});
    }
};
export const postUsuario = async(req, res) => {
    const usuario = await Usuario(req.body);
    try{
        if (await !Usuario.exists({cedula: req.body.cedula})) {
            return res.status(404).send(`The codigo ${req.body.cedula} is not repit`);
        }
    
        await usuario.save();
        res.status(201).json(usuario)
    }catch(error){
        res.status(409).json({error:error.message});
    }
};
export const putUsuario = async(req, res) => {
    const { id } = req.params;
    const { nombres, apellidos } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`The id ${id} is not valid`);
    }
    const newUsuario = { nombres, apellidos, _id: id };
    await Usuario.findByIdAndUpdate(id, newUsuario, { new: true });

    try{
        res.json(newUsuario)
    }catch(error){
        res.status(409).json({error:error.message});
    }
};
export const deleteUsuario = async(req, res) => {
    const usuario = await Usuario.findByIdAndDelete({_id: req.params.id});
    try{
        res.status(201).json(usuario)
    }catch(error){
        res.status(409).json({error:error.message});
    }
};