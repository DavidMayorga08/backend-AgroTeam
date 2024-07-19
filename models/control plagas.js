import mongoose from 'mongoose';

const ControlPlagasSchema = new mongoose.Schema({
    id_cultivo: {type: mongoose.Schema.Types.ObjectId, ref: 'Cultivos', required: true},
    id_empleado: {type: mongoose.Schema.Types.ObjectId, ref: 'Empleados', required: true},
    fecha: {type: Date, required: true},
    tipoCultivo: {type: String, required: true},
    nombre: {type: String, required: true},
    tipo: {type: String, required: true}, // fitosanitario, normal
    ingredienteActivo: {type: String, required: true},
    dosis: {type: Number, required: true},
    id_empleado: {type: mongoose.Schema.Types.ObjectId, ref: 'Empleados', required: true}, // Operario
    observaciones: {type: String, required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('ControlPlagas', ControlPlagasSchema);