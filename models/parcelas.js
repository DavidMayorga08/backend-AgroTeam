import mongoose from 'mongoose';

const ParcelasSchema = new mongoose.Schema({
    numero: {type: Number, required: true},
    ubicacionGeografica: {type: String, required: true},
    cultivoAnterior: {type: String, required: true},
    cultivoActual: {type: String, required: true},
    detalles: {type: String, required: true},
    estado: {type: String, required: true},
    area: {type: Number, required: true},
    asistenteTecnico: {type: String, required: true},
    id_finca: {type: mongoose.Schema.Types.ObjectId, ref: 'Fincas', required: true},
    fecha_Creacion: {type: Date, required: true, default: Date.now},
    estado: {type: Number, required: true}
});

export default mongoose.model('Parcelas', ParcelasSchema);