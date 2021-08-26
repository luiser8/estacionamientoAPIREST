import mongoose from 'mongoose';
import Reservacion from '../models/Reservacion.js';

export const getReservacion = async(req, res) => {
    try{
        const reservacion = await Reservacion.find();
        res.status(200).json(reservacion)
    }catch(error){
        res.status(404).json({error:error.message});
    }
};
export const getReservacionForId = async(req, res) => {
    const { id } = req.params;
    try{
        const reservacion = await Reservacion.findById(id);
        res.status(200).json(reservacion)
    }catch(error){
        res.status(404).json({error:error.message});
    }
};
export const getReservacionForPuesto = async(req, res) => {
    const { id } = req.params;
    try{
        const reservacion = await Reservacion.findOne({'puestoId': id});
        res.status(200).json(reservacion)
    }catch(error){
        res.status(404).json({error:error.message});
    }
};
export const postReservacion = async(req, res) => {
    const reservacion = await Reservacion(req.body);
    try{
        await reservacion.save();
        res.status(201).json(reservacion)
    }catch(error){
        res.status(409).json({error:error.message});
    }
};
export const putReservacion = async(req, res) => {
    const { id } = req.params;
    const { tipo } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`The id ${id} is not valid`);
    }
    const newReservacion = { tipo, _id: id };
    await Reservacion.findByIdAndUpdate(id, newReservacion, { new: true });

    try{
        res.json(newReservacion)
    }catch(error){
        res.status(409).json({error:error.message});
    }
};
export const deleteReservacion = async(req, res) => {
    const reservacion = await Reservacion.findByIdAndDelete({_id: req.params.id});
    try{
        res.status(201).json(reservacion)
    }catch(error){
        res.status(409).json({error:error.message});
    }
};