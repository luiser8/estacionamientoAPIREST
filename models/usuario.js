import mongoose from 'mongoose';

const usuarioSchema = mongoose.Schema({
    cedula: {type: Number, unique: true, required: true},
    nombres: {type: String, required: true, max: 155},
    apellidos: {type: String, required: true, max: 155},
    estado: {type: Boolean, required: true, default: true}
},{timestamps:true});

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;