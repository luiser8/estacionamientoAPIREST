import mongoose from 'mongoose';

const comprobanteSchema = mongoose.Schema({
    reservacionId: {type: mongoose.Schema.Types.ObjectId, ref: "Reservacion"},
    puestoId: {type: mongoose.Schema.Types.ObjectId, ref: "Puesto"},
    codigo: {type: String, unique: true, required: true},
    dias: {type: Number, required: true},
    pagado: {type: Number, default:0, required: true},
    estado: {type: Boolean, required: true, default: true}
},{timestamps:true});

const Comprobante = mongoose.model('Comprobante', comprobanteSchema);

export default Comprobante;