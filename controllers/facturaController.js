import mongoose from 'mongoose';
import Factura from '../models/factura.js';
import {calculosEstacionar} from '../utils/calculos.js';

export const getFactura = async(req, res) => {
    try{
        const factura = await Factura.find();
        res.status(200).json(factura)
    }catch(error){
        res.status(404).json({error:error.message});
    }
};
export const getFacturaForId = async(req, res) => {
    const { id } = req.params;
    try{
        const factura = await Factura.findById(id);
        res.status(200).json(factura)
    }catch(error){
        res.status(404).json({error:error.message});
    }
};
export const postFactura = async(req, res) => {
    const { usuarioId, reservacionId, inn, out } = req.body;
    let { counter } = 1;
    try{
        let length = Number(await Factura.find({}).countDocuments());
        counter = ++length;
  
        let amount = (await calculosEstacionar({'inn': inn, 'out': out})).toPrecision();
        
        const factura = await Factura({'usuarioId': usuarioId,'codigo': counter, 'reservacionId': reservacionId, 'amount': amount, 'inn': inn, 'out': out});
    
        await factura.save();
        res.status(201).json(factura)
    }catch(error){
        res.status(409).json({error:error.message});
    }
};
export const putFactura = async(req, res) => {
    const { id } = req.params;
    const { amount, inn, out } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`The id ${id} is not valid`);
    }
    const newFactura = { amount, inn, out, _id: id };
    await Factura.findByIdAndUpdate(id, newFactura, { new: true });

    try{
        res.json(newFactura)
    }catch(error){
        res.status(409).json({error:error.message});
    }
};
export const deleteFactura = async(req, res) => {
    const factura = await Factura.findByIdAndDelete({_id: req.params.id});
    try{
        res.status(201).json(factura)
    }catch(error){
        res.status(409).json({error:error.message});
    }
};