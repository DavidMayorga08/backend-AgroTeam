import mongoose from 'mongoose';

const RiegosSchema = new mongoose.Schema({
    id_cultivo: {type: mongoose.Schema.Types.ObjectId, ref: 'Cultivos', required: true},
    id_empleado: {type: mongoose.Schema.Types.ObjectId, ref: 'Empleados', required: true},
    fecha: {type: Date, required: true},
    diasTransplante: {type: Number, required: true},
    estadoFenologico: {type: String, required: true}, // inicial,floración,cosecha
    horaInicio: {type: Date, required: true},
    horaFin: {type: Date, required: true},
    dosis: {type: Number, required: true},  //litro/hora
    cantidadAgua: {type: Number, required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('Riegos', RiegosSchema);