import mongoose from 'mongoose';

const puestoSchema = mongoose.Schema({
    codigo: {type: Number, default: 1},
    disponibilidad: {type: Number, default: 1},
    estado: {type: Boolean, required: true, default: true}
},{timestamps:true}, {collection:'puestos'});

const Puesto = mongoose.model('Puesto', puestoSchema);

export default Puesto;