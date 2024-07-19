import mongoose from 'mongoose';

const ProduccionSchema = new mongoose.Schema({
    id_cultivo: {type: mongoose.Schema.Types.ObjectId, ref: 'Cultivos', required: true},
    fecha: {type: Date, required: true},
    NroLote: {type: String, required: true},
    especie: {type: String, required: true},
    cantidad: {type: Number, required: true},
    cantidadTrabajadores: {type: Number, required: true},
    observaciones: {type: String, required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('Produccion', ProduccionSchema);