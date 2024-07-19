import mongoose from 'mongoose';

const InsumosSchema = new mongoose.Schema({
    id_proveedor: {type: mongoose.Schema.Types.ObjectId, ref: 'Proveedores', required: true},
    nombre: {type: String, required: true},
    relacionNPK: {type: String, required: true},
    cantidad: {type: Number, required: true},
    unidad: {type: String, required: true}, //kg, litros
    responsable: {type: String, required: true},
    observaciones: {type: String, required: true},
    total: {type: Number, required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('Insumos', InsumosSchema);