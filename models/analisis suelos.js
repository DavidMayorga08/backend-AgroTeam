import mongoose from 'mongoose';

const AnalisisSueloSchema = new mongoose.Schema({
    fecha: {type: Date, required: true},
    id_parcela: {type: mongoose.Schema.Types.ObjectId, ref: 'Parcelas', required: true},
    id_empleado: {type: mongoose.Schema.Types.ObjectId, ref: 'Empleados', required: true},
    muestra: {type: String, required: true},
    cultivo: {type: String, required: true},
    laboratorio: {type: String, required: true},
    resultado: [],
    recomendacion: {type: String, required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('AnalisisSuelo', AnalisisSueloSchema);