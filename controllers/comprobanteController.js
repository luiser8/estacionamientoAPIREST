import mongoose from 'mongoose';
import Comprobante from '../models/Comprobante.js';
import {calculosFijo} from '../utils/calculos.js';

export const getComprobante = async(req, res) => {
    try{
        const comprobante = await Comprobante.find();
        res.status(200).json(comprobante)
    }catch(error){
        res.status(404).json({error:error.message});
    }
};
export const getComprobanteForId = async(req, res) => {
    const { id } = req.params;
    try{
        const comprobante = await Comprobante.findById(id);
        res.status(200).json(comprobante)
    }catch(error){
        res.status(404).json({error:error.message});
    }
};
export const getComprobanteForCod = async(req, res) => {
    const { cod, id } = req.params;
    try{
        const comprobante = await Comprobante.findOne({'codigo': cod, 'puestoId': id});
        res.status(200).json(comprobante)
    }catch(error){
        res.status(404).json({error:error.message});
    }
};
export const getComprobanteForPuesto = async(req, res) => {
    const { id } = req.params;
    try{
        const comprobante = await Comprobante.findOne({'puestoId': id});
        res.status(200).json(comprobante)
    }catch(error){
        res.status(404).json({error:error.message});
    }
};
export const postComprobante = async(req, res) => {
    const { reservacionId, puestoId, dias } = req.body;
    const codigo = Math.random().toString(36).substring(2);
    try{
        if (await !Comprobante.exists({codigo: codigo})) {
            return res.status(404).send(`The codigo is not repit`);
        }

        let pagado = (await calculosFijo({'dias': dias})).toPrecision();

        const comprobante = await Comprobante({'reservacionId': reservacionId, 'puestoId': puestoId, 'codigo': codigo, 'dias': dias, 'pagado': pagado});
    
        await comprobante.save();
        res.status(201).json(comprobante)
    }catch(error){
        res.status(409).json({error:error.message});
    }
};
export const putComprobante = async(req, res) => {
    const { id } = req.params;
    const { nombres, apellidos } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`The id ${id} is not valid`);
    }
    const newComprobante = { nombres, apellidos, _id: id };
    await Comprobante.findByIdAndUpdate(id, newComprobante, { new: true });

    try{
        res.json(newComprobante)
    }catch(error){
        res.status(409).json({error:error.message});
    }
};
export const deleteComprobante = async(req, res) => {
    const comprobante = await Comprobante.findByIdAndDelete({_id: req.params.id});
    try{
        res.status(201).json(comprobante)
    }catch(error){
        res.status(409).json({error:error.message});
    }
};