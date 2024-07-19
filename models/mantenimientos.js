import mongoose from 'mongoose';

const MantenimientosSchema = new mongoose.Schema({
    id_gastos: {type: mongoose.Schema.Types.ObjectId, ref: 'Gastos', required: true},
    id_herramienta: {type: mongoose.Schema.Types.ObjectId, ref: 'MaquinariaHerramientas', required: true},
    fecha: {type: Date, required: true},
    virificacionRealizada: {type: String, required: true},
    calibracion: {type: String, required: true},
    responsable: {type: String, required: true},
    observaciones: {type: String, required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('Mantenimientos', MantenimientosSchema);

