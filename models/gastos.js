import mongoose from 'mongoose';

const GastosSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    fecha: {type: Date, required: true},
    NroFactura: {type: String, required: true},
    descripcion: {type: String, required: true},
    total: {type: Number, required: true},
    id_insumo: {type: mongoose.Schema.Types.ObjectId, ref: 'Insumos', required: true},
    id_semillas: {type: mongoose.Schema.Types.ObjectId, ref: 'Semillas', required: true},
    id_matenimiento: {type: mongoose.Schema.Types.ObjectId, ref: 'Mantenimientos', required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('Gastos', GastosSchema);