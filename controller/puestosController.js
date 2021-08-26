import mongoose from 'mongoose';
import Puesto from '../models/puesto.js';

export const getPuesto = async(req, res) => {
    try{
        const puesto = await Puesto.find()
        res.status(200).json(puesto)
    }catch(error){
        res.status(404).json({error:error.message});
    }
};
export const getPuestoForId = async(req, res) => {
    const { id } = req.params;
    try{
        const puesto = await Puesto.findById(id);
        res.status(200).json(puesto)
    }catch(error){
        res.status(404).json({error:error.message});
    }
};
export const postPuesto = async(req, res) => {
    let { counter } = 1;
    try{
        let length = Number(await Puesto.find({}).countDocuments());
        counter = ++length;

        const puesto = await Puesto({'codigo': counter});

        await puesto.save();
        res.status(201).json(puesto)
    }catch(error){
        res.status(409).json({error:error.message});
    }
};
export const putPuesto = async(req, res) => {
    const { id } = req.params;
    const { disponibilidad } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`The id ${id} is not valid`);
    }
    const newPuesto = { disponibilidad, _id: id };
    await Puesto.findByIdAndUpdate(id, newPuesto, { new: true });

    try{
        res.json(newPuesto)
    }catch(error){
        res.status(409).json({error:error.message});
    }
};
export const deletePuesto = async(req, res) => {
    const puesto = await Puesto.findByIdAndDelete({_id: req.params.id});
    try{
        res.status(201).json(puesto)
    }catch(error){
        res.status(409).json({error:error.message});
    }
};