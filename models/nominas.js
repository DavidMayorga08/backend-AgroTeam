import mongoose from 'mongoose';

const NominasSchema = new mongoose.Schema({
    fecha: {type: Date, required: true},
    id_empleado: {type: mongoose.Schema.Types.ObjectId, ref: 'Empleados', required: true},
    tipo: {type: String, required: true},
    valor: {type: Number, required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('Nominas', NominasSchema);