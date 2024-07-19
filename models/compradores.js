import mongoose from 'mongoose';

const CompradoresSchema = new mongoose.Schema({
    id_produccion: {type: mongoose.Schema.Types.ObjectId, ref: 'Producciones', required: true},
    fecha: {type: Date, required: true},
    especie: {type: String, required: true},
    nombre: {type: String, required: true},
    telefono: {type: String, required: true},
    cantidad: {type: Number, required: true},
    NroGuiaTransporte: {type: String, required: true},
    NroLoteComecial: {type: String, required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('Compradores', CompradoresSchema);