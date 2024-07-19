import mongoose from 'mongoose';

const InventariosSchema = new mongoose.Schema({
    tipo: {type: String, required: true},
    observaciones: {type: String, required: true},
    unidad: {type: String, required: true},
    cantidad: {type: Number, required: true},
    id_Semillas: {type: mongoose.Schema.Types.ObjectId, ref: 'Semillas', required: true},
    id_insumos: {type: mongoose.Schema.Types.ObjectId, ref: 'Insumos', required: true},
    id_maquina: {type: mongoose.Schema.Types.ObjectId, ref: 'MaquinariaHerramientas', required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('Inventarios', InventariosSchema);