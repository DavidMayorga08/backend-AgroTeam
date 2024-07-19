import mongoose from 'mongoose';

const CultivosSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    tipo: {type: String, required: true},
    id_parcela: {type: mongoose.Schema.Types.ObjectId, ref: 'Parcelas', required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('Cultivos', CultivosSchema);