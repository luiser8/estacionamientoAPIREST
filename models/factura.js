import mongoose from 'mongoose';

const facturaSchema = mongoose.Schema({
    usuarioId: {type: mongoose.Schema.Types.ObjectId, ref: "Usuario"},
    reservacionId: {type: mongoose.Schema.Types.ObjectId, ref: "Reservacion"},
    codigo: {type: Number, default: 0, required: true},
    amount: {type: Number, default:0, required: true},
    inn: {type: Date, required: true },
    out: {type: Date, required: true },
    estado: {type: Boolean, required: true, default: true}
},{timestamps:true});

const Factura = mongoose.model('Factura', facturaSchema);

export default Factura;