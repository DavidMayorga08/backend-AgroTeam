import mongoose from 'mongoose';

const ClimasSchema = new mongoose.Schema({
    id_finca: {type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true},
    id_empleado: {type: mongoose.Schema.Types.ObjectId, ref: 'Empleados', required: true},
    fecha: {type: Date, required: true},
    tipoClima: {type: String, required: true},
    horaInicio: {type: Date, required: true},
    horaFin: {type: Date, required: true},
    temperaturaMax: {type: Number, required: true},
    temperaturaMin: {type: Number, required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('Climas', ClimasSchema);