import mongoose from 'mongoose';

const reservacionSchema = mongoose.Schema({
    usuarioId: {type: mongoose.Schema.Types.ObjectId, ref: "Usuario"},
    puestoId: {type: mongoose.Schema.Types.ObjectId, ref: "Puesto"},
    tipo: {type: Number, required: true},
    estado: {type: Boolean, required: true, default: true}
},{timestamps:true}, {collection:'reservacion'});

const Reservacion = mongoose.model('Reservacion', reservacionSchema);

export default Reservacion;