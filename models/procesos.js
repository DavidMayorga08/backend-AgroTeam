import mongoose from 'mongoose';

const ProcesosSchema = new mongoose.Schema({
    id_cultivo: {type: mongoose.Schema.Types.ObjectId, ref: 'Cultivos', required: true},
    id_empleado: {type: mongoose.Schema.Types.ObjectId, ref: 'Empleados', required: true},
    tipo: {type: String, required: true},
    descripcion: {type: String, required: true},
    fechaInicio: {type: Date, required: true},
    fechaFin: {type: Date, required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('Procesos', ProcesosSchema);