import mongoose from 'mongoose';

const ElaboracionSustratosSchema = new mongoose.Schema({
    id_proceso: {type: mongoose.Schema.Types.ObjectId, ref: 'Procesos', required: true},
    fecha: {type: Date, required: true},
    productoComercial: {type: String, required: true},
    ingredienteActivo: {type: String, required: true},
    dosisUtilizada: {type: Number, required: true},
    metodoAplicacion: {type: String, required: true},
    id_empleado: {type: mongoose.Schema.Types.ObjectId, ref: 'Empleados', required: true}, // Operario
    id_empleado: {type: mongoose.Schema.Types.ObjectId, ref: 'Empleados', required: true}, // Responsable
    observaciones: {type: String, required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('ElaboracionSustratos', ElaboracionSustratosSchema);