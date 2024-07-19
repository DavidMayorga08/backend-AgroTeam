import mongoose from 'mongoose';

const PreparacionSuelosSchema = new mongoose.Schema({
    fecha: {type: Date, required: true},
    id_parcela: {type: mongoose.Schema.Types.ObjectId, ref: 'Parcelas', required: true},
    id_empleado: {type: mongoose.Schema.Types.ObjectId, ref: 'Empleados', required: true},
    productos:[{
        ingredienteActivo: {type: String, required: true},
        dosis: {type: Number, required: true},
        metodoAplicacion: {type: String, required: true},
    }],
    operario: {type: String, required: true},
    responsable: {type: String, required: true},
    observaciones: {type: String, required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('PreparacionSuelos', PreparacionSuelosSchema);