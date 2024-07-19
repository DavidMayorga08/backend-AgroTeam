import mongoose from 'mongoose';

const MaquinariaHerramientasSchema = new mongoose.Schema({
    id_proveedor: {type: mongoose.Schema.Types.ObjectId, ref: 'Proveedores', required: true},
    nombre: {type: String, required: true},
    tipo: {type: String, required: true},
    fechaCompra: {type: Date, required: true},
    observaciones: {type: String, required: true},
    cantidad: {type: Number, required: true},
    total: {type: Number, required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('MaquinariaHerramientas', MaquinariaHerramientasSchema);