import mongoose from 'mongoose';

const SemillasSchema = new mongoose.Schema({
    id_proveedor: {type: mongoose.Schema.Types.ObjectId, ref: 'Proveedores', required: true},
    numFactura: {type: String, required: true},
    fechaCompra: {type: Date, required: true},
    fechaVencimiento: {type: Date, required: true},
    especieVariedad: {type: String, required: true},
    proveedorSemillas: {type: String, required: true},
    NroLote: {type: String, required: true},
    origen: {type: String, required: true},
    poderGerminativo: {type: Number, required: true},
    observaciones: {type: String, required: true},
    unidadTotal: {type: String, required: true},
    total: {type: Number, required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('Semillas', SemillasSchema);